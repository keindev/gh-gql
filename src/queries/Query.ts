import { GraphQLClient } from 'graphql-request';

export default class Query<Q> {
    public static DELIMITER = '\n';
    public static PAGE_SIZE = 100;

    protected sdk: Q;

    constructor(client: GraphQLClient, getSdk: (client: GraphQLClient) => Q) {
        this.sdk = getSdk(client);
    }

    // eslint-disable-next-line class-methods-use-this
    protected async execute<T, K>(callback: (variables: K) => Promise<T>, variables: K): Promise<T> {
        try {
            const response = await callback(variables);

            return response;
        } catch (error) {
            throw new Error(JSON.stringify(error.response, null, 4));
        }
    }
}
