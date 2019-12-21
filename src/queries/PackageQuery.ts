import { PackageJson } from 'type-fest';
import Query from '../Query';

export interface GitHubResponsePackageChange {
    hash: string;
}

export default class PackageQuery extends Query {
    public async getLastChange(until: Date): Promise<GitHubResponsePackageChange | undefined> {
        const response = await this.execute<{
            ref: { target: { history: { nodes: GitHubResponsePackageChange[] } } };
        }>(
            /* GraphQL */ `
                query GetPackageChangeCommits(
                    $owner: String!
                    $repository: String!
                    $branch: String!
                    $date: GitTimestamp!
                ) {
                    repository(owner: $owner, name: $repository) {
                        ref(qualifiedName: $branch) {
                            target {
                                ... on Commit {
                                    history(path: "package.json", until: $date, first: 2) {
                                        nodes {
                                            hash: oid
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `,
            {
                variables: { date: until.toISOString() },
            }
        );

        return response.ref.target.history.nodes[0];
    }

    public async getContent(change: GitHubResponsePackageChange): Promise<PackageJson> {
        const response = await this.execute<{
            object: { text: string };
        }>(
            /* GraphQL */ `
                query GetPackage($owner: String!, $repository: String!, $expression: String!) {
                    repository(owner: $owner, name: $repository) {
                        object(expression: $expression) {
                            ... on Blob {
                                text
                            }
                        }
                    }
                }
            `,
            {
                variables: { expression: `${change.hash}:package.json` },
            }
        );

        return JSON.parse(response.object.text);
    }
}
