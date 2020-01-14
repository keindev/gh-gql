/* eslint max-lines-per-function: 0 */
import { GraphQLClient } from 'graphql-request';
import { IGetInfoQuery } from '../../__generated__/sdk/repository';
import RepositoryQuery from '../Repository';

jest.mock('graphql-request');

const defaultVariables = { repository: 'gh-gql', branch: 'master', owner: 'keindev' };
let client: jest.Mocked<GraphQLClient>;
let query: RepositoryQuery;

describe('Repository query', (): void => {
    beforeEach((): void => {
        jest.resetAllMocks();

        client = new GraphQLClient('') as jest.Mocked<GraphQLClient>;
        query = new RepositoryQuery(client);
    });

    it('Get info', async (): Promise<void> => {
        const repository = {
            name: 'gh-gql',
            createdAt: '2019-08-25T22:06:42Z',
            updatedAt: '2019-09-08T23:02:09Z',
            description: null,
            homepageUrl: null,
            isArchived: false,
            isDisabled: false,
            isFork: false,
            isLocked: false,
            isMirror: false,
            isPrivate: false,
            isTemplate: false,
            owner: {
                login: 'keindev',
            },
            primaryLanguage: {
                name: 'TypeScript',
            },
            licenseInfo: {
                name: 'MIT License',
            },
        };

        client.request.mockImplementation((): Promise<IGetInfoQuery> => Promise.resolve({ viewer: { repository } }));

        const info = await query.getInfo({ ...defaultVariables });

        expect(info).toStrictEqual(repository);
    });
});
