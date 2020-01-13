/* eslint-disable */
/* cSpell:disable */
import * as Types from '../types';

import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';

export type IGetInfoQueryVariables = {
    repository: Types.Scalars['String'];
};

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
export function getSdk(client: GraphQLClient) {
    return {
        getInfo(variables: IGetInfoQueryVariables): Promise<IGetInfoQuery> {
            return client.request<IGetInfoQuery>(print(GetInfoDocument), variables);
        },
    };
}
