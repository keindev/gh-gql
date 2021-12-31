import { GraphQLClient } from 'graphql-request';
import { getUserAgent } from 'universal-user-agent';

import CommitQuery from './queries/Commit';
import FileQuery from './queries/File';
import ReleaseQuery from './queries/Release';
import RepositoryQuery from './queries/Repository';

type IQueryType = CommitQuery | FileQuery | ReleaseQuery | RepositoryQuery | undefined;

interface IQuery {
  commit: CommitQuery;
  file: FileQuery;
  release: ReleaseQuery;
  repository: RepositoryQuery;
}

export class Provider {
  static DEFAULT_USER_AGENT = `gh-gql ${getUserAgent()}`;
  static ENDPOINT = 'https://api.github.com/graphql';

  #queries: Map<keyof IQuery, IQueryType> = new Map();

  /** Access field to the list of queries */
  readonly query: IQuery;

  constructor(userAgent: string = Provider.DEFAULT_USER_AGENT) {
    const client = new GraphQLClient(Provider.ENDPOINT, {
      method: 'POST',
      headers: { userAgent, authorization: `token ${process.env.GITHUB_TOKEN}` },
    });

    this.query = new Proxy<IQuery>({} as IQuery, {
      get: (_target, name: keyof IQuery): IQueryType => {
        if (!this.#queries.has(name)) {
          let query;

          switch (name) {
            case 'commit':
              query = new CommitQuery(client);
              break;
            case 'file':
              query = new FileQuery(client);
              break;
            case 'release':
              query = new ReleaseQuery(client);
              break;
            case 'repository':
              query = new RepositoryQuery(client);
              break;
            default:
              query = undefined;
              break;
          }

          if (query) this.#queries.set(name, query);
        }

        return this.#queries.get(name);
      },
    });
  }
}

export default Provider;
