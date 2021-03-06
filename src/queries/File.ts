import { GraphQLClient } from 'graphql-request';
import * as SDK from '../__generated__/sdk/file';

import Query from './Query';

export type IGetContentOptions = Omit<SDK.IGetContentQueryVariables, 'expression'> & { oid: string; filePath: string };

export default class FileQuery extends Query<ReturnType<typeof SDK.getSdk>> {
  constructor(client: GraphQLClient) {
    super(client, SDK.getSdk);
  }

  /** Get a file object id */
  async getId(variables: SDK.IGetIdQueryVariables): Promise<string | undefined> {
    const response = await this.execute(this.sdk.getId, variables);
    const nodes = response.repository?.ref?.target?.history.nodes;

    return Array.isArray(nodes) && nodes[0]?.oid ? nodes[0].oid : undefined;
  }

  /** Get file content */
  async getContent({ oid, filePath, ...others }: IGetContentOptions): Promise<string | undefined> {
    const response = await this.execute(this.sdk.getContent, { ...others, expression: `${oid}:${filePath}` });

    return response.repository?.object?.text ?? undefined;
  }
}
