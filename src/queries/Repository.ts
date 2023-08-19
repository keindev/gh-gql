import * as Documents from '../documents/repository.js';
import * as Repository from '../types/repository.js';

import Query from './Query.js';

export default class RepositoryQuery extends Query {
  /** Get information about repository */
  async getData(
    variables: Repository.IRepositoryQueryVariables
  ): Promise<Repository.IRepositoryQueryResult | undefined> {
    const response = await this.execute<Repository.IRepositoryQuery>(Documents.getRepository, variables);

    return response.viewer.repository;
  }

  /** Get list of repositories for user */
  async getList(variables: Repository.IRepositoryListQueryVariables): Promise<string[]> {
    const response = await this.execute<Repository.IRepositoryListQuery>(Documents.getRepositories, variables);

    return response.user.repositories.nodes.map(({ name }) => name);
  }
}
