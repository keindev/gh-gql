/* eslint-disable */
/* cSpell:disable */
import * as Types from '../types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type IGetLastQueryVariables = Types.Exact<{
  owner: Types.Scalars['String'];
  repository: Types.Scalars['String'];
}>;

export type IGetLastQuery = {
  repository: Types.Maybe<{
    releases: {
      nodes: Types.Maybe<Array<Types.Maybe<{ id: string; tagName: string; publishedAt: Types.Maybe<string> }>>>;
    };
  }>;
};

export const GetLastDocument = gql`
  query getLast($owner: String!, $repository: String!) {
    repository(owner: $owner, name: $repository) {
      releases(last: 1) {
        nodes {
          id
          tagName
          publishedAt
        }
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getLast(variables: IGetLastQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<IGetLastQuery> {
      return withWrapper(() => client.request<IGetLastQuery>(print(GetLastDocument), variables, requestHeaders));
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
