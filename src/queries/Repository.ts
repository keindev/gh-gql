import { GraphQLClient } from 'graphql-request';
import * as SDK from '../__generated__/sdk/repository';
import Query from './Query';

export default class RepositoryQuery extends Query<ReturnType<typeof SDK.getSdk>> {
    constructor(client: GraphQLClient) {
        super(client, SDK.getSdk);
    }

    async getInfo(variables: SDK.IGetInfoQueryVariables): Promise<SDK.IGetInfoQuery['viewer']['repository']> {
        const response = await this.execute(this.sdk.getInfo, variables);

        return response.viewer.repository;
    }

    async getList(variables: SDK.IGetListQueryVariables): Promise<string[]> {
        const response = await this.execute(this.sdk.getList, variables);

        return (response.user?.repositories.nodes || []).map(node => node!.name);
    }
}
