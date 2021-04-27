/* eslint-disable */
/* cSpell:disable */
import * as Types from '../types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type ICommitsHistoryFragment = {
  edges: Types.Maybe<
    Array<
      Types.Maybe<{
        node: Types.Maybe<{
          oid: string;
          messageHeadline: string;
          messageBody: string;
          url: string;
          committedDate: string;
          author: Types.Maybe<{
            avatarUrl: string;
            user: Types.Maybe<{ databaseId: Types.Maybe<number>; login: string; url: string }>;
          }>;
        }>;
      }>
    >
  >;
};

export type IGetCountQueryVariables = Types.Exact<{
  owner: Types.Scalars['String'];
  repository: Types.Scalars['String'];
  branch: Types.Scalars['String'];
  since: Types.Scalars['GitTimestamp'];
}>;

export type IGetCountQuery = {
  repository: Types.Maybe<{ ref: Types.Maybe<{ target: Types.Maybe<{ history: { totalCount: number } }> }> }>;
};

export type IGetFromQueryVariables = Types.Exact<{
  owner: Types.Scalars['String'];
  repository: Types.Scalars['String'];
  branch: Types.Scalars['String'];
  limit: Types.Scalars['Int'];
  since: Types.Scalars['GitTimestamp'];
  cursor: Types.Scalars['String'];
}>;

export type IGetFromQuery = {
  repository: Types.Maybe<{ ref: Types.Maybe<{ target: Types.Maybe<{ history: ICommitsHistoryFragment }> }> }>;
};

export type IGetLastCommitQueryVariables = Types.Exact<{
  owner: Types.Scalars['String'];
  repository: Types.Scalars['String'];
  branch: Types.Scalars['String'];
}>;

export type IGetLastCommitQuery = {
  repository: Types.Maybe<{
    object: Types.Maybe<{
      history: {
        edges: Types.Maybe<
          Array<
            Types.Maybe<{
              node: Types.Maybe<{
                commitUrl: string;
                committedDate: string;
                committer: Types.Maybe<{ name: Types.Maybe<string> }>;
              }>;
            }>
          >
        >;
      };
    }>;
  }>;
};

export type IGetListQueryVariables = Types.Exact<{
  owner: Types.Scalars['String'];
  repository: Types.Scalars['String'];
  branch: Types.Scalars['String'];
  limit: Types.Scalars['Int'];
  since: Types.Scalars['GitTimestamp'];
}>;

export type IGetListQuery = {
  repository: Types.Maybe<{
    ref: Types.Maybe<{
      target: Types.Maybe<{
        history: {
          totalCount: number;
          pageInfo: { endCursor: Types.Maybe<string>; hasNextPage: boolean };
        } & ICommitsHistoryFragment;
      }>;
    }>;
  }>;
};

export const CommitsHistoryFragmentDoc = gql`
  fragment CommitsHistory on CommitHistoryConnection {
    edges {
      node {
        oid
        messageHeadline
        messageBody
        url
        committedDate
        author {
          avatarUrl
          user {
            databaseId
            login
            url
          }
        }
      }
    }
  }
`;
export const GetCountDocument = gql`
  query getCount($owner: String!, $repository: String!, $branch: String!, $since: GitTimestamp!) {
    repository(owner: $owner, name: $repository) {
      ref(qualifiedName: $branch) {
        target {
          ... on Commit {
            history(since: $since) {
              totalCount
            }
          }
        }
      }
    }
  }
`;
export const GetFromDocument = gql`
  query getFrom(
    $owner: String!
    $repository: String!
    $branch: String!
    $limit: Int!
    $since: GitTimestamp!
    $cursor: String!
  ) {
    repository(owner: $owner, name: $repository) {
      ref(qualifiedName: $branch) {
        target {
          ... on Commit {
            history(since: $since, first: $limit, after: $cursor) {
              ...CommitsHistory
            }
          }
        }
      }
    }
  }
  ${CommitsHistoryFragmentDoc}
`;
export const GetLastCommitDocument = gql`
  query getLastCommit($owner: String!, $repository: String!, $branch: String!) {
    repository(owner: $owner, name: $repository) {
      object(expression: $branch) {
        ... on Commit {
          history(first: 1) {
            edges {
              node {
                commitUrl
                committer {
                  name
                }
                committedDate
              }
            }
          }
        }
      }
    }
  }
`;
export const GetListDocument = gql`
  query getList($owner: String!, $repository: String!, $branch: String!, $limit: Int!, $since: GitTimestamp!) {
    repository(owner: $owner, name: $repository) {
      ref(qualifiedName: $branch) {
        target {
          ... on Commit {
            history(since: $since, first: $limit) {
              totalCount
              pageInfo {
                endCursor
                hasNextPage
              }
              ...CommitsHistory
            }
          }
        }
      }
    }
  }
  ${CommitsHistoryFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getCount(variables: IGetCountQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<IGetCountQuery> {
      return withWrapper(() => client.request<IGetCountQuery>(GetCountDocument, variables, requestHeaders));
    },
    getFrom(variables: IGetFromQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<IGetFromQuery> {
      return withWrapper(() => client.request<IGetFromQuery>(GetFromDocument, variables, requestHeaders));
    },
    getLastCommit(
      variables: IGetLastCommitQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<IGetLastCommitQuery> {
      return withWrapper(() => client.request<IGetLastCommitQuery>(GetLastCommitDocument, variables, requestHeaders));
    },
    getList(variables: IGetListQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<IGetListQuery> {
      return withWrapper(() => client.request<IGetListQuery>(GetListDocument, variables, requestHeaders));
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
