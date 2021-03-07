import { GraphQLClient } from 'graphql-request';

export default class Query<Q> {
  static readonly DELIMITER = '\n';
  static readonly PAGE_SIZE = 100;
  static readonly TAB_WIDTH = 2;

  protected sdk: Q;

  constructor(client: GraphQLClient, getSdk: (client: GraphQLClient) => Q) {
    this.sdk = getSdk(client);
  }

  protected async execute<T, K>(callback: (variables: K) => Promise<T>, variables: K): Promise<T> {
    try {
      const response = await callback(variables);

      return response;
    } catch (error) {
      throw new Error(JSON.stringify(error.response, null, Query.TAB_WIDTH));
    }
  }
}
