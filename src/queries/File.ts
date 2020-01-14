import { GraphQLClient } from 'graphql-request';
import { Maybe } from '../__generated__/types';
import * as SDK from '../__generated__/sdk/file';
import Query from './Query';

export type TFileContentQueryVariables = {
    owner: SDK.IGetContentQueryVariables['owner'];
    repository: SDK.IGetContentQueryVariables['repository'];
    oid: string;
    filePath: string;
};

export default class FileQuery extends Query<ReturnType<typeof SDK.getSdk>> {
    constructor(client: GraphQLClient) {
        super(client, SDK.getSdk);
    }

    async getContent({ oid, filePath, ...others }: TFileContentQueryVariables): Promise<Maybe<string>> {
        const response = await this.execute(this.sdk.getContent, { ...others, expression: `${oid}:${filePath}` });

        return response.repository?.object?.text ?? null;
    }

    async getLastChange(variables: SDK.IGetLastChangeQueryVariables): Promise<Maybe<string>> {
        const response = await this.execute(this.sdk.getLastChange, variables);
        const nodes = response.repository?.ref?.target.history.nodes;

        return Array.isArray(nodes) ? nodes[0]?.oid ?? null : null;
    }
}
