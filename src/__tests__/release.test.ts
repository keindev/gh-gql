// eslint-disable-next-line node/no-extraneous-import
import { jest } from '@jest/globals';
import { GraphQLClient } from 'graphql-request';

import ReleaseQuery from '../queries/Release';

const defaultVariables = { repository: 'gh-gql', branch: 'master', owner: 'keindev' };
const date = new Date(0).toISOString();
let client: jest.Mocked<GraphQLClient>;
let query: ReleaseQuery;

describe('Release query', (): void => {
  beforeEach((): void => {
    client = new GraphQLClient('') as jest.Mocked<GraphQLClient>;
    query = new ReleaseQuery(client);
  });

  it('Get last', async (): Promise<void> => {
    const nodes = [{ id: '5e49ba949be261cae6697eed7cde24c816a12b68', tagName: 'v1.0.0', publishedAt: date }];

    jest.spyOn(client, 'request').mockResolvedValue({ repository: { releases: { nodes } } });

    const release = await query.getLast({ ...defaultVariables });

    expect(release).toStrictEqual(nodes[0]);
  });
});
