import { GraphQLClient } from 'graphql-request';
import * as SDK from '../__generated__/sdk/commit';

import { ArrayElement } from '../types';
import Query from './Query';

type CommitNode = NonNullable<NonNullable<ArrayElement<NonNullable<SDK.ICommitsHistoryFragment['edges']>>>['node']>;
type CommitNodeAuthor = NonNullable<CommitNode['author']>;
type CommitNodeAuthorUser = Omit<NonNullable<CommitNodeAuthor['user']>, 'databaseId'> & {
  databaseId: NonNullable<NonNullable<CommitNodeAuthor['user']>['databaseId']>;
};

export type ICommit = Omit<CommitNode, 'author'> & {
  author: Omit<CommitNodeAuthor, 'user'> & { user: CommitNodeAuthorUser };
};

type LastCommitObject = NonNullable<NonNullable<SDK.IGetLastCommitQuery['repository']>['object']>;
type LastCommitHistoryEdges = NonNullable<NonNullable<LastCommitObject['history']>['edges']>;
type LastCommitNode = NonNullable<NonNullable<ArrayElement<LastCommitHistoryEdges>>['node']>;
type LastCommitCommitter = NonNullable<LastCommitNode['committer']>;

export type ILastCommitInfo = Omit<LastCommitNode, 'committer'> & {
  committer: Omit<LastCommitCommitter, 'name'> & { name: NonNullable<LastCommitCommitter['name']> };
};

export default class CommitQuery extends Query<ReturnType<typeof SDK.getSdk>> {
  constructor(client: GraphQLClient) {
    super(client, SDK.getSdk);
  }

  /** Get the number of commits since a specific date */
  async getCount({ since, ...others }: SDK.IGetCountQueryVariables): Promise<number> {
    const response = await this.execute(this.sdk.getCount, {
      ...others,
      since: since ?? new Date(0).toISOString(),
    });

    return response.repository?.ref?.target?.history.totalCount ?? 0;
  }

  /** Get limited list of comments since a specific date */
  async getList(options: Omit<SDK.IGetListQueryVariables, 'limit'>): Promise<ICommit[]> {
    const args = { ...options, limit: CommitQuery.PAGE_SIZE };
    const response = await this.execute(this.sdk.getList, args);
    const nodes: ICommit[] = [];

    if (response.repository?.ref?.target) {
      const { history } = response.repository.ref.target;

      if (history.edges?.length) {
        const [cursor] = (history.pageInfo.endCursor ?? '').split(' ');
        const promises = [];

        if (cursor && history.pageInfo.hasNextPage) {
          const pagesCount = Math.ceil(history.totalCount / CommitQuery.PAGE_SIZE);
          let pageNumber = 1;

          while (pagesCount >= pageNumber) {
            promises.push(
              this.execute(this.sdk.getFrom, {
                ...args,
                cursor: `${cursor} ${pageNumber++ * CommitQuery.PAGE_SIZE - 1}`,
              })
            );
          }
        }

        [response, ...(await Promise.all(promises))].forEach(page => {
          (page.repository?.ref?.target?.history.edges ?? []).forEach(
            edge => edge?.node && nodes.push(edge.node as ICommit)
          );
        });
      }
    }

    return nodes;
  }

  /** Get information about last commit in branch */
  async getLastCommit(options: SDK.IGetLastCommitQueryVariables): Promise<ILastCommitInfo | undefined> {
    const response = await this.execute(this.sdk.getLastCommit, options);
    const edges = response.repository?.object?.history.edges;
    let info: ILastCommitInfo | undefined;

    if (Array.isArray(edges)) {
      const node = edges[0]?.node;

      if (node) info = node as ILastCommitInfo;
    }

    return info;
  }
}
