/* eslint max-lines-per-function: 0 */
import { GraphQLClient } from 'graphql-request';

import { IGetCountQuery, IGetLastCommitQuery, IGetListQuery } from '../__generated__/sdk/commit';
import CommitQuery from '../queries/Commit';

jest.mock('graphql-request');

const defaultVariables = { repository: 'gh-gql', branch: 'master', owner: 'keindev' };
const date = new Date(0).toISOString();
let client: jest.Mocked<GraphQLClient>;
let query: CommitQuery;

describe('Commit query', (): void => {
  beforeEach((): void => {
    jest.resetAllMocks();

    client = new GraphQLClient('') as jest.Mocked<GraphQLClient>;
    query = new CommitQuery(client);
  });

  it('Get list', async (): Promise<void> => {
    const edges = [
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
        Promise.resolve({
          repository: {
            ref: {
              target: {
                history: {
                  edges,
                  totalCount: 1,
                  pageInfo: { endCursor: 'd1d4846b0cce7585a817ba583e48a2fb12974fd3 1', hasNextPage: false },
                },
              },
            },
          },
        })
    );

    const commit = await query.getList({ ...defaultVariables, since: date });

    expect(commit[0]).toStrictEqual(edges[0]?.node);
    expect(client.request.mock.calls.length).toBe(1);
  });

  it('Get count', async (): Promise<void> => {
    const totalCount = 42;

    client.request.mockImplementation(
      (): Promise<IGetCountQuery> =>
        Promise.resolve({
          repository: {
            ref: {
              target: {
                history: { totalCount },
              },
            },
          },
        })
    );

    const count = await query.getCount({ ...defaultVariables, since: date });

    expect(count).toBe(totalCount);
    expect(client.request.mock.calls.length).toBe(1);
  });

  it('Get last commit', async (): Promise<void> => {
    client.request.mockImplementation(
      (): Promise<IGetLastCommitQuery> =>
        Promise.resolve({
          repository: {
            object: {
              history: {
                edges: [
                  {
                    node: {
                      commitUrl: 'https://github.com/keindev/gh-gql/commit/2e96173efa40f222bc8cd90879affcf1e1c046ce',
                      committer: {
                        name: 'keindev',
                      },
                      committedDate: '2021-03-07T01:11:37Z',
                    },
                  },
                ],
              },
            },
          },
        })
    );

    const node = await query.getLastCommit({ ...defaultVariables });

    expect(node?.committer.name).toBe('keindev');
  });
});
