import dotenv from 'dotenv';
import getUserAgent from 'universal-user-agent';
import { GraphQLClient } from 'graphql-request';
import { version } from '../package.json';

dotenv.config();

export class GitHubProvider {
    public static userAgent = `gh-gql/${version} ${getUserAgent()}`;
    public static endpoint = 'https://api.github.com/graphql';

    public readonly package: PackageQuery;
    public readonly commit: CommitQuery;

    private repository: string;
    private owner: string;
    private branch: string;
    private client: GraphQLClient;

    public constructor(repository: string, owner: string, branch: string) {
        this.repository = repository;
        this.owner = owner;
        this.branch = branch;
        this.client = new GraphQLClient(GitHubProvider.endpoint, {
            method: 'POST',
            headers: {
                authorization: `token ${process.env.GITHUB_TOKEN}`,
            },
        });
    }

    public async getCommits(date: string, pageIndex: number): Promise<Commit[]> {
        const cursor = pageIndex ? await this.getCursor(pageIndex) : undefined;
        const commits = await this.historyQuery.getCommits(date, GitHubProvider.PAGE_SIZE, cursor);

        return commits.map((commit): Commit => this.parseResponse(commit));
    }

    public async getCommitsCount(date: string): Promise<number> {
        const count = await this.historyQuery.getCommitsCount(date);

        return count;
    }

    public async getLastRelease(): Promise<ReleaseInfo> {
        if (!this.release) {
            const response = await this.releaseQuery.getLast();

            this.release = response || {
                tag: undefined,
                date: new Date(0).toISOString(),
            };
        }

        return this.release as ReleaseInfo;
    }

    public async getPrevPackage(): Promise<PackageJson> {
        const task = TaskTree.add(`Loading previous release {bold package.json} state...`);
        const { packageQuery: query } = this;
        const release = await this.getLastRelease();
        const commit = await query.getPackageChanges(release.date);
        let data: PackageJson = {};

        if (commit) {
            data = await query.getPackageFrom(commit);
            task.complete('Previous release {bold package.json} state loaded');
        } else {
            task.skip('The previous release did not contain package.json');
        }

        return data;
    }

    private async getCursor(position: number): Promise<string | undefined> {
        if (!this.cursor) {
            this.cursor = await this.historyQuery.getCursor();
        }

        return this.cursor ? HistoryQuery.moveCursor(this.cursor, position * GitHubProvider.PAGE_SIZE - 1) : undefined;
    }

    private parseResponse(response: GitHubResponseHistoryCommit): Commit {
        const author = this.parseAuthor(response.author);
        const commit = new Commit(response.hash, {
            author,
            header: response.header,
            body: response.body,
            timestamp: new Date(response.date).getTime(),
            url: response.url,
        });

        return commit;
    }

    private parseAuthor(response: GitHubResponseHistoryAuthor): Author {
        const { authors } = this;
        const {
            avatar,
            user: { id, login, url },
        } = response;

        if (!authors.has(id)) {
            authors.set(id, new Author(login, { url, avatar }));
        }

        return authors.get(id) as Author;
    }
}
