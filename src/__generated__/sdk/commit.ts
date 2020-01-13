/* eslint-disable */
/* cSpell:disable */
import * as Types from '../types';

import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
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

export type IGetCountQueryVariables = {
    owner: Types.Scalars['String'];
    repository: Types.Scalars['String'];
    branch: Types.Scalars['String'];
    since: Types.Scalars['GitTimestamp'];
};

export type IGetCountQuery = {
    repository: Types.Maybe<{ ref: Types.Maybe<{ target: { history: { totalCount: number } } }> }>;
};

export type IGetFromQueryVariables = {
    owner: Types.Scalars['String'];
    repository: Types.Scalars['String'];
    branch: Types.Scalars['String'];
    limit: Types.Scalars['Int'];
    since: Types.Scalars['GitTimestamp'];
    cursor: Types.Scalars['String'];
};

export type IGetFromQuery = {
    repository: Types.Maybe<{ ref: Types.Maybe<{ target: { history: ICommitsHistoryFragment } }> }>;
};

export type IGetListQueryVariables = {
    owner: Types.Scalars['String'];
    repository: Types.Scalars['String'];
    branch: Types.Scalars['String'];
    limit: Types.Scalars['Int'];
    since: Types.Scalars['GitTimestamp'];
};

export type IGetListQuery = {
    repository: Types.Maybe<{
        ref: Types.Maybe<{
            target: {
                history: {
                    totalCount: number;
                    pageInfo: { endCursor: Types.Maybe<string>; hasNextPage: boolean };
                } & ICommitsHistoryFragment;
            };
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
export function getSdk(client: GraphQLClient) {
    return {
        getCount(variables: IGetCountQueryVariables): Promise<IGetCountQuery> {
            return client.request<IGetCountQuery>(print(GetCountDocument), variables);
        },
        getFrom(variables: IGetFromQueryVariables): Promise<IGetFromQuery> {
            return client.request<IGetFromQuery>(print(GetFromDocument), variables);
        },
        getList(variables: IGetListQueryVariables): Promise<IGetListQuery> {
            return client.request<IGetListQuery>(print(GetListDocument), variables);
        },
    };
}
