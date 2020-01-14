/* eslint max-lines-per-function: 0 */
import { GraphQLClient } from 'graphql-request';
import { IGetLastQuery } from '../../__generated__/sdk/release';
import ReleaseQuery from '../Release';

jest.mock('graphql-request');

const defaultVariables = { repository: 'gh-gql', branch: 'master', owner: 'keindev' };
const date = new Date(0).toISOString();
let client: jest.Mocked<GraphQLClient>;
let query: ReleaseQuery;

describe('Release query', (): void => {
    beforeEach((): void => {
        jest.resetAllMocks();

        client = new GraphQLClient('') as jest.Mocked<GraphQLClient>;
        query = new ReleaseQuery(client);
    });

    it('Get last', async (): Promise<void> => {
        const nodes = [{ id: '5e49ba949be261cae6697eed7cde24c816a12b68', tagName: 'v1.0.0', publishedAt: date }];

        client.request.mockImplementation(
            (): Promise<IGetLastQuery> => Promise.resolve({ repository: { releases: { nodes } } })
        );

        const release = await query.getLast({ ...defaultVariables });

        expect(release).toStrictEqual(nodes[0]);
    });
});
