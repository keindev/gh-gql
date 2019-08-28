import { Query } from '../query';
import { CommitFragment } from '../fragments/commit';

export interface GitHubResponseCommitAuthorUserInfo {
    id: number;
    login: string;
    url: string;
}

export interface GitHubResponseCommitAuthor {
    avatar: string;
    user: GitHubResponseCommitAuthorUserInfo;
}

export interface GitHubResponseCommit {
    hash: string;
    header: string;
    body: string;
    url: string;
    date: string;
    author: GitHubResponseCommitAuthor;
}

export interface GitHubResponseCommitsEdges {
    node: GitHubResponseCommit;
}

export class CommitQuery extends Query {
    public static PAGE_SIZE = 100;

    private cursor: string | undefined;

    public async get(since: Date, pageIndex?: number): Promise<GitHubResponseCommit[]> {
        const formattedDate = since.toISOString();
        const cursor = await this.getCursor(pageIndex);
        let edges;

        if (pageIndex && cursor) {
            edges = await this.getFirstCommitsEdgesFrom(formattedDate, cursor);
        } else {
            edges = await this.getFirstCommitsEdges(formattedDate);
        }

        return edges.map((edge: GitHubResponseCommitsEdges): GitHubResponseCommit => edge.node);
    }

    public async getCount(since: Date = new Date(0)): Promise<number> {
        const response = await this.execute(
            /* GraphQL */ `
                query GetCommitsCount($owner: String!, $repository: String!, $branch: String!, $date: GitTimestamp!) {
                    repository(owner: $owner, name: $repository) {
                        ref(qualifiedName: $branch) {
                            target {
                                ... on Commit {
                                    history(since: $date) {
                                        totalCount
                                    }
                                }
                            }
                        }
                    }
                }
            `,
            {
                date: since.toISOString(),
            }
        );

        return response.ref.target.history.totalCount as number;
    }

    private async getFirstCommitsEdges(since: string): Promise<GitHubResponseCommitsEdges[]> {
        const response = await this.execute(
            /* GraphQL */ `
                query GetCommits(
                    $owner: String!
                    $repository: String!
                    $branch: String!
                    $limit: Int!
                    $date: GitTimestamp!
                ) {
                    repository(owner: $owner, name: $repository) {
                        ref(qualifiedName: $branch) {
                            target {
                                ... on Commit {
                                    history(since: $date, first: $limit) {
                                        ...CommitFragment
                                    }
                                }
                            }
                        }
                    }
                }
            `,
            {
                date: since,
                limit: CommitQuery.PAGE_SIZE,
            },
            [CommitFragment]
        );

        return response.ref.target.history.edges;
    }

    private async getFirstCommitsEdgesFrom(since: string, cursor: string): Promise<GitHubResponseCommitsEdges[]> {
        const response = await this.execute(
            /* GraphQL */ `
                query GetCommits(
                    $owner: String!
                    $repository: String!
                    $branch: String!
                    $limit: Int!
                    $date: GitTimestamp!
                    $cursor: String!
                ) {
                    repository(owner: $owner, name: $repository) {
                        ref(qualifiedName: $branch) {
                            target {
                                ... on Commit {
                                    history(since: $date, first: $limit, after: $cursor) {
                                        ...CommitFragment
                                    }
                                }
                            }
                        }
                    }
                }
            `,
            {
                cursor,
                date: since,
                limit: CommitQuery.PAGE_SIZE,
            },
            [CommitFragment]
        );

        return response.ref.target.history.edges;
    }

    private async getCursor(position?: number): Promise<string | undefined> {
        let cursor: string | undefined;

        if (!this.cursor) {
            const response = await this.execute(/* GraphQL */ `
                query GetCommitObjectId($owner: String!, $repository: String!, $branch: String!) {
                    repository(owner: $owner, name: $repository) {
                        ref(qualifiedName: $branch) {
                            target {
                                ... on Commit {
                                    oid
                                }
                            }
                        }
                    }
                }
            `);

            this.cursor = response.ref.target.oid as string;
        }

        if (position && this.cursor) {
            cursor = `${this.cursor} ${position * CommitQuery.PAGE_SIZE - 1}`;
        }

        return cursor;
    }
}
