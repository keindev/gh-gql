import { GraphQLClient } from 'graphql-request';
import { Variables } from 'graphql-request/dist/src/types';

export interface ExecuteOptions {
    variables?: Variables;
    fragments?: string[];
}

export default class Query {
    public static DELIMITER = '\n';
    public static PAGE_SIZE = 100;

    protected client: GraphQLClient;
    protected variables: Variables;

    public constructor(client: GraphQLClient, variables: Variables = {}) {
        this.client = client;
        this.variables = variables;
    }

    protected async execute<T>(query: string, { variables = {}, fragments = [] }: ExecuteOptions = {}): Promise<T> {
        try {
            const response = await this.client.request<T>([...fragments, query].join(Query.DELIMITER), {
                ...variables,
                ...this.variables,
            });

            return response;
        } catch (error) {
            error.message = JSON.stringify(error.response, null, 4);

            throw error;
        }
    }
}
