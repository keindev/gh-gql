import { PackageJson } from 'type-fest';
import { Query } from '../query';

export interface GitHubResponsePackageChange {
    hash: string;
}

export class PackageQuery extends Query {
    public async getChanges(date: string): Promise<GitHubResponsePackageChange | undefined> {
        const response = await this.execute(
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
                date,
            }
        );

        return (response.ref.target.history.nodes as GitHubResponsePackageChange[]).pop();
    }

    public async getContent(change: GitHubResponsePackageChange): Promise<PackageJson> {
        const response = await this.execute(
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
                expression: `${change.hash}:package.json`,
            }
        );

        return JSON.parse(response.object.text as string);
    }
}
