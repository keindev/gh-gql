import { ClientError, GraphQLClient, Variables } from 'graphql-request';

export default class Query {
  static readonly DELIMITER = '\n';
  static readonly PAGE_SIZE = 100;
  static readonly TAB_WIDTH = 2;

  private readonly client: GraphQLClient;

  constructor(client: GraphQLClient) {
    this.client = client;
  }

  protected async execute<T>(query: string, variables: Variables): Promise<T> | never {
    try {
      const response = await this.client.request<T>(query, variables);

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

    return {} as T;
  }
}
