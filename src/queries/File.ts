import { GraphQLClient } from 'graphql-request';
import * as SDK from '../__generated__/sdk/file';

import Query from './Query';

export type IGetContentOptions = Omit<SDK.IGetContentQueryVariables, 'expression'> & { filePath: string; oid: string };

export default class FileQuery extends Query<ReturnType<typeof SDK.getSdk>> {
  constructor(client: GraphQLClient) {
    super(client, SDK.getSdk);
  }

  /** Get file content */
  async getContent({ oid, filePath, ...others }: IGetContentOptions): Promise<string | undefined> {
    const response = await this.execute(this.sdk.getContent, { ...others, expression: `${oid}:${filePath}` });
    const object = response.repository?.object;

    return object && 'text' in object ? object.text ?? undefined : undefined;
  }

  /** Get a file object id */
  async getId(variables: SDK.IGetIdQueryVariables): Promise<string | undefined> {
    const response = await this.execute(this.sdk.getId, variables);
    const target = response.repository?.ref?.target;
    const history = target && 'history' in target ? target.history : undefined;

    return Array.isArray(history?.nodes) && history?.nodes[0]?.oid ? history?.nodes[0].oid : undefined;
  }
}
