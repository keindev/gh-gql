import { IArrayElement } from './base.js';

export interface ICommitListTotalQuery {
  repository: {
    ref: {
      target: {
        history: {
          totalCount: number;
        };
      };
    };
  };
}

export interface ICommitListTotalQueryVariables {
  branch: string;
  owner: string;
  repository: string;
  since: string;
}

export interface ICommitListLastNodeQuery {
  repository: {
    object: {
      history: {
        edges: {
          node: {
            commitUrl: string;
            committedDate: string;
            committer: {
              name: string;
            };
          };
        }[];
      };
    };
  };
}

export interface ICommitListLastNodeQueryVariables {
  branch: string;
  owner: string;
  repository: string;
}

export interface ICommitListQueryEdge {
  node: {
    author: {
      avatarUrl: string;
      user: { login: string; url: string };
    };
    committedDate: string;
    messageBody: string;
    messageHeadline: string;
    oid: string;
    url: string;
  };
}

export interface ICommitListQuery {
  repository: {
    ref: {
      target: {
        history: {
          edges: ICommitListQueryEdge[];
          pageInfo: { endCursor: string | null; hasNextPage: boolean };
          totalCount: number;
        };
      };
    };
  };
}

export interface ICommitListQueryVariables {
  branch: string;
  owner: string;
  repository: string;
  since: string;
}

export type ICommitListLastNodeQueryResultEdges = ICommitListLastNodeQuery['repository']['object']['history']['edges'];
export type ICommitListLastNodeQueryResult = IArrayElement<ICommitListLastNodeQueryResultEdges>['node'];
