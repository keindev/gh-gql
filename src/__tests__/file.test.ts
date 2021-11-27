// eslint-disable-next-line node/no-extraneous-import
import { jest } from '@jest/globals';
import { GraphQLClient } from 'graphql-request';

import FileQuery from '../queries/File';

const defaultVariables = { repository: 'gh-gql', branch: 'master', owner: 'keindev' };
const date = new Date(0).toISOString();
const oid = '5e49ba949be261cae6697eed7cde24c816a12b68';
const filePath = 'package.json';
let client: jest.Mocked<GraphQLClient>;
let query: FileQuery;

describe('File query', (): void => {
  beforeEach((): void => {
    client = new GraphQLClient('') as jest.Mocked<GraphQLClient>;
    query = new FileQuery(client);
  });

  it('Get last change', async (): Promise<void> => {
    const nodes = [{ oid }];

    jest.spyOn(client, 'request').mockResolvedValue({ repository: { ref: { target: { history: { nodes } } } } });

    const change = await query.getId({ ...defaultVariables, filePath: 'package.json', until: date });

    expect(change).toStrictEqual(nodes[0]?.oid);
  });

  it('Get content', async (): Promise<void> => {
    const text = 'gh-gql';

    jest.spyOn(client, 'request').mockResolvedValue({ repository: { object: { text } } });

    const content = await query.getContent({ ...defaultVariables, oid, filePath });

    expect(content).toStrictEqual(text);
  });
});
