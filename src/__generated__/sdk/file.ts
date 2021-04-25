/* eslint-disable */
/* cSpell:disable */
import * as Types from '../types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type IGetContentQueryVariables = Types.Exact<{
  owner: Types.Scalars['String'];
  repository: Types.Scalars['String'];
  expression: Types.Scalars['String'];
}>;

export type IGetContentQuery = { repository: Types.Maybe<{ object: Types.Maybe<{ text: Types.Maybe<string> }> }> };

export type IGetIdQueryVariables = Types.Exact<{
  owner: Types.Scalars['String'];
  repository: Types.Scalars['String'];
  branch: Types.Scalars['String'];
  until: Types.Scalars['GitTimestamp'];
  filePath: Types.Scalars['String'];
}>;

export type IGetIdQuery = {
  repository: Types.Maybe<{
    ref: Types.Maybe<{ target: Types.Maybe<{ history: { nodes: Types.Maybe<Array<Types.Maybe<{ oid: string }>>> } }> }>;
  }>;
};

export const GetContentDocument = gql`
  query getContent($owner: String!, $repository: String!, $expression: String!) {
    repository(owner: $owner, name: $repository) {
      object(expression: $expression) {
        ... on Blob {
          text
        }
      }
    }
  }
`;
export const GetIdDocument = gql`
  query getId($owner: String!, $repository: String!, $branch: String!, $until: GitTimestamp!, $filePath: String!) {
    repository(owner: $owner, name: $repository) {
      ref(qualifiedName: $branch) {
        target {
          ... on Commit {
            history(path: $filePath, until: $until, first: 2) {
              nodes {
                oid
              }
            }
          }
        }
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getContent(
      variables: IGetContentQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<IGetContentQuery> {
      return withWrapper(() => client.request<IGetContentQuery>(GetContentDocument, variables, requestHeaders));
    },
    getId(variables: IGetIdQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<IGetIdQuery> {
      return withWrapper(() => client.request<IGetIdQuery>(GetIdDocument, variables, requestHeaders));
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
