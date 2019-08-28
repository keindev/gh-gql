import dotenv from 'dotenv';
import getUserAgent from 'universal-user-agent';
import { GraphQLClient } from 'graphql-request';
import { CommitQuery } from './queries/commit';
import { PackageQuery } from './queries/package';
import { ReleaseQuery } from './queries/release';

dotenv.config();

export interface GitHubProviderOptions {
    repository: string;
    owner: string;
    branch: string;
    userAgent?: string;
}

export class GitHubProvider {
    public static DEFAULT_USER_AGENT = `gh-gql ${getUserAgent()}`;
    public static ENDPOINT = 'https://api.github.com/graphql';

    public commit: CommitQuery;
    public package: PackageQuery;
    public release: ReleaseQuery;

    public constructor(options: GitHubProviderOptions) {
        const { repository, owner, branch } = options;
        const client = new GraphQLClient(GitHubProvider.ENDPOINT, {
            method: 'POST',
            headers: {
                userAgent: options.userAgent || GitHubProvider.DEFAULT_USER_AGENT,
                authorization: `token ${process.env.GITHUB_TOKEN}`,
            },
        });

        this.commit = new CommitQuery(client, { repository, owner, branch });
        this.package = new PackageQuery(client, { repository, owner, branch });
        this.release = new ReleaseQuery(client, { repository, owner, branch });
    }
}
