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
  async getList({ limit, ...others }: SDK.IGetListQueryVariables): Promise<ICommit[]> {
    const args = { ...others, limit };
    const response = await this.execute(this.sdk.getList, args);
    const nodes: ICommit[] = [];

    if (response.repository?.ref?.target) {
      const { history } = response.repository.ref.target;

      if (history.edges?.length) {
        const cursor = history.pageInfo.endCursor;
        const promises = [];
        const pagesCount = Math.ceil(history.totalCount / limit);
        let pageIndex = 0;

        while (pagesCount > pageIndex) {
          const nextCursor = `${cursor} ${pageIndex++ * CommitQuery.PAGE_SIZE - 1}`;

          promises.push(this.execute(this.sdk.getFrom, { ...args, cursor: nextCursor }));
        }

        const pages = await Promise.all(promises);

        pages.forEach(page => {
          const edges = page.repository?.ref?.target?.history.edges ?? [];

          edges.map(edge => {
            const node = edge?.node;

            if (node) nodes.push(node as ICommit);
          });
        });
      }
    }

    return nodes;
  }

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
