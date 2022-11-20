import * as Documents from '../documents/repository.js';

import {
    IRepositoryListQuery, IRepositoryListQueryVariables, IRepositoryQuery, IRepositoryQueryResult,
    IRepositoryQueryVariables,
} from '../types/repository.js';
import Query from './Query.js';

export default class RepositoryQuery extends Query {
  /** Get information about repository */
  async getData(variables: IRepositoryQueryVariables): Promise<IRepositoryQueryResult | undefined> {
    const response = await this.execute<IRepositoryQuery>(Documents.getRepository, variables);

    return response.viewer.repository;
  }

  /** Get list of repositories for user */
  async getList(variables: IRepositoryListQueryVariables): Promise<string[]> {
    const response = await this.execute<IRepositoryListQuery>(Documents.getRepositories, variables);

    return response.user.repositories.nodes.map(({ name }) => name);
  }
}
