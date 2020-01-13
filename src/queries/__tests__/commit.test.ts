/* eslint-disable jest/no-test-callback */
/* eslint max-lines-per-function: 0 */
import { GraphQLClient } from 'graphql-request';
import { Variables } from 'graphql-request/dist/src/types';
import CommitQuery, { TCommitHistoryEdges } from '../Commit';
import { IGetListQuery } from '../../__generated__/sdk/commit';

jest.mock('graphql-request');

const defaultVariables = { repository: 'gh-gql', branch: 'master', owner: 'keindev' };
const date = new Date(0);
let client: jest.Mocked<GraphQLClient>;
let commitQuery: CommitQuery;

describe('Commit query', (): void => {
    beforeEach((): void => {
        jest.resetAllMocks();

        client = new GraphQLClient('') as jest.Mocked<GraphQLClient>;
        commitQuery = new CommitQuery(client);
        // { repository: 'gh-gql', branch: 'master', owner: 'keindev' }
    });

    it('Get commits list', (done): void => {
        const commits: TCommitHistoryEdges = [
            {
                node: {
                    oid: '5e49ba949be261cae6697eed7cde24c816a12b68',
                    messageHeadline: 'build: release v1.0.0',
                    messageBody: '',
                    url: 'https://github.com/keindev/changelog-guru/commit/5e49ba949be261cae6697eed7cde24c816a12b68',
                    committedDate: '1970-01-01T00:00:00.000Z',
                    author: {
                        avatarUrl: 'https://avatars3.githubusercontent.com/u/4527292',
                        user: {
                            databaseId: 1,
                            login: 'keindev',
                            url: 'https://github.com/keindev',
                        },
                    },
                },
            },
        ];

        client.request.mockImplementation(
            (): Promise<IGetListQuery> =>
                Promise.resolve({ repository: { ref: { target: { history: { edges: commits } } } } })
        );

        Promise.all([
            commitQuery.getList({ ...defaultVariables, since: date.toISOString(), limit: 0 }),
            commitQuery.getList({ ...defaultVariables, since: date.toISOString(), limit: 1 }),
        ]).then((results): void => {
            results.forEach((node): void => {
                expect(node).toBeDefined();
                expect(node![0]).toStrictEqual(commits[0]!.node);
                expect(client.request.mock.calls.length).toBe(4);
            });

            done();
        });
    });
    // eslint-disable-next-line jest/no-commented-out-tests
    /*

    it('Get commits count', (done): void => {
        client.request.mockImplementation(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (query: string, variables?: Variables): Promise<any> => {
                expect(query).toBeDefined();
                expect(variables).toStrictEqual({ ...defaultVariables, date: date.toISOString() });

                return Promise.resolve({ repository: { ref: { target: { history: { totalCount: 42 } } } } });
            }
        );

        Promise.all([commitQuery.getCount(date), commitQuery.getCount()]).then((results): void => {
            const [A, B] = results;

            expect(A).toBe(B);

            done();
        });
    });

    */
});
