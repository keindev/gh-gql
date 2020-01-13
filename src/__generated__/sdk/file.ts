/* eslint-disable */
/* cSpell:disable */
import * as Types from '../types';

import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';

export type IGetContentQueryVariables = {
    owner: Types.Scalars['String'];
    repository: Types.Scalars['String'];
    expression: Types.Scalars['String'];
};

export type IGetContentQuery = { repository: Types.Maybe<{ object: Types.Maybe<{ text: Types.Maybe<string> }> }> };

export type IGetLastChangeQueryVariables = {
    owner: Types.Scalars['String'];
    repository: Types.Scalars['String'];
    branch: Types.Scalars['String'];
    until: Types.Scalars['GitTimestamp'];
    path: Types.Scalars['String'];
};

export type IGetLastChangeQuery = {
    repository: Types.Maybe<{
        ref: Types.Maybe<{ target: { history: { nodes: Types.Maybe<Array<Types.Maybe<{ oid: string }>>> } } }>;
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
export const GetLastChangeDocument = gql`
    query getLastChange(
        $owner: String!
        $repository: String!
        $branch: String!
        $until: GitTimestamp!
        $path: String!
    ) {
        repository(owner: $owner, name: $repository) {
            ref(qualifiedName: $branch) {
                target {
                    ... on Commit {
                        history(path: $path, until: $until, first: 2) {
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
export function getSdk(client: GraphQLClient) {
    return {
        getContent(variables: IGetContentQueryVariables): Promise<IGetContentQuery> {
            return client.request<IGetContentQuery>(print(GetContentDocument), variables);
        },
        getLastChange(variables: IGetLastChangeQueryVariables): Promise<IGetLastChangeQuery> {
            return client.request<IGetLastChangeQuery>(print(GetLastChangeDocument), variables);
        },
    };
}
