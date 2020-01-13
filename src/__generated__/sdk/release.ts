/* eslint-disable */
/* cSpell:disable */
import * as Types from '../types';

import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';

export type IGetLastQueryVariables = {
    owner: Types.Scalars['String'];
    repository: Types.Scalars['String'];
};

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
export function getSdk(client: GraphQLClient) {
    return {
        getLast(variables: IGetLastQueryVariables): Promise<IGetLastQuery> {
            return client.request<IGetLastQuery>(print(GetLastDocument), variables);
        },
    };
}
