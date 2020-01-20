import { GraphQLClient } from 'graphql-request';
import Maybe from 'graphql/tsutils/Maybe';
import * as SDK from '../__generated__/sdk/release';
import Query from './Query';

export type TReleaseInfo = Maybe<{ id: string; tagName: string; publishedAt: Maybe<string> }>;

export default class ReleaseQuery extends Query<ReturnType<typeof SDK.getSdk>> {
    constructor(client: GraphQLClient) {
        super(client, SDK.getSdk);
    }

    async getLast(variables: SDK.IGetLastQueryVariables): Promise<TReleaseInfo> {
        const response = await this.execute(this.sdk.getLast, variables);
        const nodes = response.repository?.releases.nodes;

        return Array.isArray(nodes) ? nodes[0] ?? null : null;
    }
}
