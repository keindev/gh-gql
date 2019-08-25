import { GraphQLClient } from 'graphql-request';
import { Variables } from 'graphql-request/dist/src/types';

export class Query {
    public static FRAGMENT_SEPARATOR = '\n';

    protected client: GraphQLClient;
    protected variables: Variables;

    public constructor(client: GraphQLClient, variables: Variables = {}) {
        this.client = client;
        this.variables = variables;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    protected async execute(query: string, variables: Variables = {}, fragments: string[] = []): Promise<any> {
        const data = await this.client.request(
            [...fragments, query].join(Query.FRAGMENT_SEPARATOR),
            Object.assign(variables, this.variables)
        );

        return data ? data.repository : undefined;
    }
}
