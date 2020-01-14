/* eslint max-lines-per-function: 0 */
import { GraphQLClient } from 'graphql-request';
import { IGetLastChangeQuery, IGetContentQuery } from '../../__generated__/sdk/file';
import FileQuery from '../File';

jest.mock('graphql-request');

const defaultVariables = { repository: 'gh-gql', branch: 'master', owner: 'keindev' };
const date = new Date(0).toISOString();
const oid = '5e49ba949be261cae6697eed7cde24c816a12b68';
const filePath = 'package.json';
let client: jest.Mocked<GraphQLClient>;
let query: FileQuery;

describe('File query', (): void => {
    beforeEach((): void => {
        jest.resetAllMocks();

        client = new GraphQLClient('') as jest.Mocked<GraphQLClient>;
        query = new FileQuery(client);
    });

    it('Get last change', async (): Promise<void> => {
        const nodes = [{ oid }];

        client.request.mockImplementation(
            (): Promise<IGetLastChangeQuery> =>
                Promise.resolve({ repository: { ref: { target: { history: { nodes } } } } })
        );

        const change = await query.getLastChange({ ...defaultVariables, path: 'package.json', until: date });

        expect(change).toStrictEqual(nodes[0].oid);
    });

    it('Get content', async (): Promise<void> => {
        const text = 'gh-gql';

        client.request.mockImplementation(
            (): Promise<IGetContentQuery> => Promise.resolve({ repository: { object: { text } } })
        );

        const content = await query.getContent({ ...defaultVariables, oid, filePath });

        expect(content).toStrictEqual(text);
    });
});
