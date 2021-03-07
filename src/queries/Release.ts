import { GraphQLClient } from 'graphql-request';
import * as SDK from '../__generated__/sdk/release';

import { ArrayElement } from '../types';
import Query from './Query';

type Repository = NonNullable<SDK.IGetLastQuery['repository']>;

type IRelease = NonNullable<ArrayElement<NonNullable<Repository['releases']['nodes']>>>;

export default class ReleaseQuery extends Query<ReturnType<typeof SDK.getSdk>> {
  constructor(client: GraphQLClient) {
    super(client, SDK.getSdk);
  }

  /** Get last release object */
  async getLast(variables: SDK.IGetLastQueryVariables): Promise<IRelease | undefined> {
    const response = await this.execute(this.sdk.getLast, variables);
    const nodes = response.repository?.releases.nodes;

    return Array.isArray(nodes) && nodes[0] ? (nodes[0] as IRelease) : undefined;
  }
}
