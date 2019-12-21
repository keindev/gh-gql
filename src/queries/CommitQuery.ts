import Query from './Query';
import { CommitFragment } from '../fragments/commit';
import { RefTargetHistory, Edges, RefTarget, Repository } from '../types/Query';
import { Author } from '../types/Author';

export interface Commit {
    hash: string;
    header: string;
    body: string;
    url: string;
    date: string;
    author: Author;
}

// FIXME: evaluate cursors
export type RepositoryCommitCursor = Repository<RefTarget<{ oid: string }>>;
export type RepositoryCommits = Repository<RefTargetHistory<{ edges: Edges<Commit>[] }>>;
export type RepositoryCommitsCount = Repository<RefTargetHistory<{ totalCount: number }>>;

export default class CommitQuery extends Query {
    private cursor: string | undefined;

    public async getList(since: Date, pageIndex?: number): Promise<Commit[]> {
        const cursor = await this.getCursor(pageIndex);
        const edges =
            pageIndex && cursor
                ? await this.getFirstCommitsEdgesFrom(since.toISOString(), cursor)
                : await this.getFirstCommitsEdges(since.toISOString());

        return edges.map(({ node }: Edges<Commit>): Commit => node);
    }

    public async getCount(since: Date = new Date(0)): Promise<number> {
        const response = await this.execute<RepositoryCommitsCount>(
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
                variables: { date: since.toISOString() },
            }
        );

        return response.repository.ref.target.history.totalCount;
    }

    private async getFirstCommitsEdges(since: string): Promise<Edges<Commit>[]> {
        const response = await this.execute<RepositoryCommits>(
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
                variables: { date: since, limit: Query.PAGE_SIZE },
                fragments: [CommitFragment],
            }
        );

        return response.repository.ref.target.history.edges;
    }

    private async getFirstCommitsEdgesFrom(since: string, cursor: string): Promise<Edges<Commit>[]> {
        const response = await this.execute<RepositoryCommits>(
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
                variables: { cursor, date: since, limit: Query.PAGE_SIZE },
                fragments: [CommitFragment],
            }
        );

        return response.repository.ref.target.history.edges;
    }

    private async getCursor(position?: number): Promise<string | undefined> {
        let cursor: string | undefined;

        if (!this.cursor) {
            const response = await this.execute<RepositoryCommitCursor>(/* GraphQL */ `
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

            this.cursor = response.repository.ref.target.oid;
        }
        // FIXME: use next cursor
        if (position && this.cursor) {
            cursor = `${this.cursor} ${position * CommitQuery.PAGE_SIZE - 1}`;
        }

        return cursor;
    }
}
