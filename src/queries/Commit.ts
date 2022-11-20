import * as Documents from '../documents/commit.js';

import {
    ICommitListLastNodeQuery, ICommitListLastNodeQueryResult, ICommitListLastNodeQueryVariables, ICommitListQuery,
    ICommitListQueryEdge, ICommitListQueryVariables, ICommitListTotalQuery, ICommitListTotalQueryVariables,
} from '../types/commit.js';
import Query from './Query.js';

export default class CommitQuery extends Query {
  /** Get information about last commit in branch */
  async getLastCommit(
    variables: ICommitListLastNodeQueryVariables
  ): Promise<ICommitListLastNodeQueryResult | undefined> {
    const response = await this.execute<ICommitListLastNodeQuery>(Documents.getCommitListLastNode, variables);

    return response.repository.object.history.edges[0]?.node;
  }

  /** Get limited list of comments since a specific date */
  async getList<T = ICommitListQueryEdge['node']>(variables: ICommitListQueryVariables): Promise<T[]> {
    const args = { ...variables, limit: CommitQuery.PAGE_SIZE };
    const response = await this.execute<ICommitListQuery>(Documents.getCommitList, args);
    const { history } = response.repository.ref.target;
    const nodes: T[] = [];

    if (history.edges.length) {
      const [cursor] = (history.pageInfo.endCursor ?? '').split(' ');
      const promises = [];

      if (cursor && history.pageInfo.hasNextPage) {
        const pagesCount = Math.ceil(history.totalCount / CommitQuery.PAGE_SIZE);
        let pageNumber = 1;

        while (pagesCount >= pageNumber) {
          promises.push(
            this.execute<ICommitListQuery>(Documents.getCommitListFrom, {
              ...args,
              cursor: `${cursor} ${pageNumber++ * CommitQuery.PAGE_SIZE - 1}`,
            })
          );
        }
      }

      [response, ...(await Promise.all(promises))].forEach(({ repository }) => {
        repository.ref.target.history.edges.forEach(({ node }) => node && nodes.push(node as T));
      });
    }

    return nodes;
  }

  /** Get the number of commits since a specific date */
  async getTotal({ since = new Date(0).toISOString(), ...others }: ICommitListTotalQueryVariables): Promise<number> {
    const response = await this.execute<ICommitListTotalQuery>(Documents.getCommitListTotal, { ...others, since });

    return response.repository.ref.target.history.totalCount;
  }
}
