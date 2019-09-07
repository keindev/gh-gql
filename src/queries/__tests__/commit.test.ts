import { GraphQLClient } from 'graphql-request';
import { Variables } from 'graphql-request/dist/src/types';
import { CommitQuery, GitHubResponseCommitsEdges } from '../commit';

jest.mock('graphql-request');

const defaultVariables = { repository: 'gh-gql', branch: 'master', owner: 'keindev' };
const date = new Date(0);
let client: jest.Mocked<GraphQLClient>;
let commitQuery: CommitQuery;

describe('Commit query', (): void => {
    beforeEach((): void => {
        jest.resetAllMocks();

        client = new GraphQLClient('') as jest.Mocked<GraphQLClient>;
        commitQuery = new CommitQuery(client, { repository: 'gh-gql', branch: 'master', owner: 'keindev' });
    });

    it('Get commits list', (done): void => {
        const commits: GitHubResponseCommitsEdges[] = [
            {
                node: {
                    header: 'build: release v1.0.0',
                    body: '',
                    hash: '5e49ba949be261cae6697eed7cde24c816a12b68',
                    url: 'https://github.com/keindev/changelog-guru/commit/5e49ba949be261cae6697eed7cde24c816a12b68',
                    date: '1970-01-01T00:00:00.000Z',
                    author: {
                        avatar: 'https://avatars3.githubusercontent.com/u/4527292',
                        user: {
                            id: 1,
                            login: 'keindev',
                            url: 'https://github.com/keindev',
                        },
                    },
                },
            },
        ];

        client.request.mockImplementation(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (query: string, variables?: Variables): Promise<any> => {
                expect(query).toBeDefined();
                expect(variables).toBeDefined();

                if (Object.keys(variables as Variables).length === Object.keys(defaultVariables).length) {
                    expect(variables).toStrictEqual({ ...defaultVariables });
                } else {
                    expect(variables).toStrictEqual({ ...defaultVariables, date: date.toISOString(), limit: 100 });
                }

                return Promise.resolve({ repository: { ref: { target: { history: { edges: commits } } } } });
            }
        );

        Promise.all([commitQuery.getList(date, 0), commitQuery.getList(date, 1)]).then((results): void => {
            results.forEach((list): void => {
                expect(list[0]).toStrictEqual(commits[0].node);
                expect(client.request.mock.calls.length).toBe(4);
            });

            done();
        });
    });

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
});
