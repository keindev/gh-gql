import dotenv from 'dotenv';
import { getUserAgent } from 'universal-user-agent';
import { GraphQLClient } from 'graphql-request';
import CommitQuery from './queries/CommitQuery';
import PackageQuery from './queries/PackageQuery';
import ReleaseQuery from './queries/ReleaseQuery';

dotenv.config();

export interface GitHubProviderOptions {
    repository: string;
    owner: string;
    branch: string;
    userAgent?: string;
}

export class Provider {
    public static DEFAULT_USER_AGENT = `gh-gql ${getUserAgent()}`;
    public static ENDPOINT = 'https://api.github.com/graphql';

    public commit: CommitQuery;
    public package: PackageQuery;
    public release: ReleaseQuery;

    public constructor(options: GitHubProviderOptions) {
        const { repository, owner, branch } = options;
        const client = new GraphQLClient(Provider.ENDPOINT, {
            method: 'POST',
            headers: {
                userAgent: options.userAgent || Provider.DEFAULT_USER_AGENT,
                authorization: `token ${process.env.GITHUB_TOKEN}`,
            },
        });

        this.commit = new CommitQuery(client, { repository, owner, branch });
        this.package = new PackageQuery(client, { repository, owner, branch });
        this.release = new ReleaseQuery(client, { repository, owner, branch });
    }
}
