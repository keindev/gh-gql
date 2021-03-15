/* eslint-disable */
/* cSpell:disable */
import * as Types from '../types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type IGetInfoQueryVariables = Types.Exact<{
  repository: Types.Scalars['String'];
}>;

export type IGetInfoQuery = {
  viewer: {
    repository: Types.Maybe<{
      name: string;
      createdAt: string;
      updatedAt: string;
      description: Types.Maybe<string>;
      homepageUrl: Types.Maybe<string>;
      isArchived: boolean;
      isDisabled: boolean;
      isFork: boolean;
      isLocked: boolean;
      isMirror: boolean;
      isPrivate: boolean;
      isTemplate: boolean;
      owner: { login: string } | { login: string };
      primaryLanguage: Types.Maybe<{ name: string }>;
      licenseInfo: Types.Maybe<{ name: string }>;
    }>;
  };
};

export type IGetListQueryVariables = Types.Exact<{
  login: Types.Scalars['String'];
  limit: Types.Scalars['Int'];
}>;

export type IGetListQuery = {
  user: Types.Maybe<{ repositories: { nodes: Types.Maybe<Array<Types.Maybe<{ name: string }>>> } }>;
};

export const GetInfoDocument = gql`
  query getInfo($repository: String!) {
    viewer {
      repository(name: $repository) {
        name
        createdAt
        updatedAt
        description
        homepageUrl
        isArchived
        isDisabled
        isFork
        isLocked
        isMirror
        isPrivate
        isTemplate
        owner {
          login
        }
        primaryLanguage {
          name
        }
        licenseInfo {
          name
        }
      }
    }
  }
`;
export const GetListDocument = gql`
  query getList($login: String!, $limit: Int!) {
    user(login: $login) {
      repositories(first: $limit) {
        nodes {
          name
        }
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getInfo(variables: IGetInfoQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<IGetInfoQuery> {
      return withWrapper(() => client.request<IGetInfoQuery>(GetInfoDocument, variables, requestHeaders));
    },
    getList(variables: IGetListQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<IGetListQuery> {
      return withWrapper(() => client.request<IGetListQuery>(GetListDocument, variables, requestHeaders));
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
