import { GraphQLClient } from 'graphql-request';
import { Variables, ClientError } from 'graphql-request/dist/src/types';

export interface Response<T> {
    repository: T;
}

export interface QueryExecuteOptions {
    variables?: Variables;
    fragments?: string[];
}

export class Query {
    public static FRAGMENT_SEPARATOR = '\n';

    protected client: GraphQLClient;
    protected variables: Variables;

    public constructor(client: GraphQLClient, variables: Variables = {}) {
        this.client = client;
        this.variables = variables;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    protected async execute<T>(
        query: string,
        { variables = {}, fragments = [] }: QueryExecuteOptions = {}
    ): Promise<T> {
        let data: Response<T>;

        try {
            data = await this.client.request<Response<T>>(
                [...fragments, query].join(Query.FRAGMENT_SEPARATOR),
                Object.assign(variables, this.variables)
            );

            return data.repository;
        } catch (error) {
            const clientError = error as ClientError;

            clientError.message = JSON.stringify(clientError.response, null, 4);

            throw clientError;
        }
    }
}
