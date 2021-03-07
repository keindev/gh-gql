import { GraphQLClient } from 'graphql-request';
import * as SDK from '../__generated__/sdk/repository';

import Query from './Query';

export type IRepository = NonNullable<SDK.IGetInfoQuery['viewer']['repository']>;

export default class RepositoryQuery extends Query<ReturnType<typeof SDK.getSdk>> {
  constructor(client: GraphQLClient) {
    super(client, SDK.getSdk);
  }

  /** Get information about repository */
  async getInfo(variables: SDK.IGetInfoQueryVariables): Promise<IRepository | undefined> {
    const response = await this.execute(this.sdk.getInfo, variables);

    return response.viewer.repository ?? undefined;
  }

  /** Get list of repositories for user */
  async getList(variables: SDK.IGetListQueryVariables): Promise<string[]> {
    const response = await this.execute(this.sdk.getList, variables);
    const nodes: string[] = [];

    (response.user?.repositories.nodes ?? []).forEach(node => {
      if (node?.name) nodes.push(node.name);
    });

    return nodes;
  }
}
