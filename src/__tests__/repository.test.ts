// eslint-disable-next-line node/no-extraneous-import
import { jest } from '@jest/globals';
import { GraphQLClient } from 'graphql-request';

import RepositoryQuery from '../queries/Repository';

const defaultVariables = { repository: 'gh-gql', branch: 'master', owner: 'keindev' };
let client: jest.Mocked<GraphQLClient>;
let query: RepositoryQuery;

describe('Repository query', (): void => {
  beforeEach((): void => {
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

    jest.spyOn(client, 'request').mockResolvedValue({ viewer: { repository } });

    const info = await query.getInfo({ ...defaultVariables });

    expect(info).toStrictEqual(repository);
  });

  it('Get list', async (): Promise<void> => {
    const repositories = ['gh-gql', 'tasktree-cli', 'changelog-guru'];

    jest
      .spyOn(client, 'request')
      .mockResolvedValue({ user: { repositories: { nodes: repositories.map(name => ({ name })) } } });

    const list = await query.getList({ login: 'keindev', limit: 100 });

    expect(list).toStrictEqual(repositories);
  });
});
