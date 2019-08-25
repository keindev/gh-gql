import { Query } from '../query';
import { CommitFragment } from '../fragments/commit';

export interface Commit {}

export class CommitQuery extends Query {
    public static PAGE_SIZE = 100;

    private cursor: string | undefined;

    // new Date(0).toISOString()

    public async getCommits(date: Date, pageIndex: number): Promise<Commit[]> {
        const formattedDate = date.toISOString();
        let edges;

        if (pageIndex) {
            const cursor = await this.getCursor(pageIndex);

            if (cursor) edges = await this.getFirstCommitsEdgesFrom(formattedDate, cursor);
        } else {
            edges = await this.getFirstCommitsEdges(formattedDate);
        }

        return edges.map((edge: GitHubResponseHistoryNode): GitHubResponseHistoryCommit => edge.node);
    }

    public async getCommitsCount(date?: Date): Promise<number> {
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
                date: (date || new Date(0)).toISOString(),
            }
        );

        return response.ref.target.history.totalCount as number;
    }

    private async getFirstCommitsEdges(date: string) {
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
                date,
                limit: CommitQuery.PAGE_SIZE,
            },
            CommitFragment
        );

        return response.ref.target.history.edges;
    }

    private async getFirstCommitsEdgesFrom(date: string, cursor: string) {
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
                date,
                cursor,
                limit: CommitQuery.PAGE_SIZE,
            },
            CommitFragment
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
