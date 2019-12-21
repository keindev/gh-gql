import Query from '../Query';

export interface RepositoryInfo {
    name: string;
    createdAt: string;
    updatedAt: string;
    description: string;
    homepageUrl: string;
    isArchived: boolean;
    isDisabled: boolean;
    isFork: boolean;
    isLocked: boolean;
    isMirror: boolean;
    isPrivate: boolean;
    isTemplate: boolean;
    owner: {
        login: string;
    };
    primaryLanguage: {
        name: string;
    };
    licenseInfo: {
        name: string;
    };
}

export default class RepositoryQuery extends Query {
    public async getInfo(repository: string): Promise<RepositoryInfo | undefined> {
        const response = await this.execute<{ viewer: { repository: RepositoryInfo } }>(
            /* GraphQL */ `
                query GetRelease($repository: String!) {
                    viewer {
                        repository(name: $repository) {
                            name
                            createdAt
                            updatedAt
                            description
                            homepageUrl
                            isArchived
                            isDisabled
                            isFork
                            isLocked
                            isMirror
                            isPrivate
                            isTemplate
                            owner {
                                login
                            }
                            primaryLanguage {
                                name
                            }
                            licenseInfo {
                                name
                            }
                        }
                    }
                }
            `,
            { variables: { repository } }
        );

        return response.viewer.repository;
    }
}
