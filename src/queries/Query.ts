import { ClientError, GraphQLClient } from 'graphql-request';

export default class Query<Q> {
  static readonly DELIMITER = '\n';
  static readonly PAGE_SIZE = 100;
  static readonly TAB_WIDTH = 2;

  protected sdk: Q;

  constructor(client: GraphQLClient, getSdk: (client: GraphQLClient) => Q) {
    this.sdk = getSdk(client);
  }

  protected async execute<T, K>(callback: (variables: K) => Promise<T>, variables: K): Promise<T | Partial<T>> | never {
    try {
      const response = await callback(variables);

      return response;
    } catch (error) {
      if (error instanceof ClientError) {
        const { message, documentation_url: url, status } = error.response;

        throw new Error(
          message && url
            ? `${message} (${error.response?.documentation_url}): ${error.response?.status}`
            : `${status} response error${message ? `: ${message}` : ''}`
        );
      }
    }

    return {} as Partial<T>;
  }
}
