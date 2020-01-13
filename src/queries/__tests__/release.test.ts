/* eslint max-lines-per-function: 0 */
import { GraphQLClient } from 'graphql-request';
import { Variables } from 'graphql-request/dist/src/types';
import { ReleaseQuery, ReleaseInfo } from '../release';

jest.mock('graphql-request');

const defaultVariables = { repository: 'gh-gql', branch: 'master', owner: 'keindev' };
let client: jest.Mocked<GraphQLClient>;
let releaseQuery: ReleaseQuery;

describe('Package query', (): void => {
    beforeEach((): void => {
        jest.resetAllMocks();

        client = new GraphQLClient('') as jest.Mocked<GraphQLClient>;
        releaseQuery = new ReleaseQuery(client, { repository: 'gh-gql', branch: 'master', owner: 'keindev' });
    });

    it('Get commits', (): void => {return new Promise((done) => {
        const nodes: ReleaseInfo[] = [
            {
                date: new Date(0).toISOString(),
                tag: 'v1.0.0',
            },
        ];

        client.request.mockImplementation(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (query: string, variables?: Variables): Promise<any> => {
                expect(query).toBeDefined();
                expect(variables).toStrictEqual({ ...defaultVariables });

                return Promise.resolve({ repository: { releases: { nodes } } });
            }
        );

        releaseQuery.getLast().then((release): void => {
            expect(release).toStrictEqual(nodes[0]);

            done();
        });
    })});
});
