/* eslint max-lines-per-function: 0 */
import { GraphQLClient } from 'graphql-request';
import { Variables } from 'graphql-request/dist/src/types';
import { PackageQuery, GitHubResponsePackageChange } from '../package';

jest.mock('graphql-request');

const defaultVariables = { repository: 'gh-gql', branch: 'master', owner: 'keindev' };
const date = new Date(0);
let client: jest.Mocked<GraphQLClient>;
let packageQuery: PackageQuery;

describe('Package query', (): void => {
    beforeEach((): void => {
        jest.resetAllMocks();

        client = new GraphQLClient('') as jest.Mocked<GraphQLClient>;
        packageQuery = new PackageQuery(client, { repository: 'gh-gql', branch: 'master', owner: 'keindev' });
    });

    it('Get last change', (): void => {return new Promise((done) => {
        const nodes: GitHubResponsePackageChange[] = [
            {
                hash: '5e49ba949be261cae6697eed7cde24c816a12b68',
            },
        ];

        client.request.mockImplementation(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (query: string, variables?: Variables): Promise<any> => {
                expect(query).toBeDefined();
                expect(variables).toStrictEqual({ ...defaultVariables, date: date.toISOString() });

                return Promise.resolve({ repository: { ref: { target: { history: { nodes } } } } });
            }
        );

        packageQuery.getLastChange(date).then((change): void => {
            expect(change).toStrictEqual(nodes[0]);

            done();
        });
    })});

    it('Get content', (): void => {return new Promise((done) => {
        const packageContent = { name: 'gh-gql' };

        client.request.mockImplementation(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (query: string, variables?: Variables): Promise<any> => {
                expect(query).toBeDefined();
                expect(variables).toStrictEqual({
                    ...defaultVariables,
                    expression: `5e49ba949be261cae6697eed7cde24c816a12b68:package.json`,
                });

                return Promise.resolve({ repository: { object: { text: JSON.stringify(packageContent) } } });
            }
        );

        packageQuery.getContent({ hash: '5e49ba949be261cae6697eed7cde24c816a12b68' }).then((content): void => {
            expect(content).toStrictEqual(packageContent);

            done();
        });
    })});
});
