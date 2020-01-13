import { GraphQLClient } from 'graphql-request';
import Maybe from 'graphql/tsutils/Maybe';
import * as SDK from '../__generated__/sdk/commit';
import Query from './Query';

export type TCommitQueryVariables = SDK.IGetListQueryVariables & { limit?: number };
export type TCommitHistoryEdges = Required<SDK.ICommitsHistoryFragment['edges']>;

export default class CommitQuery extends Query<ReturnType<typeof SDK.getSdk>> {
    constructor(client: GraphQLClient) {
        super(client, SDK.getSdk);
    }

    async getCount(vars: SDK.IGetCountQueryVariables): Promise<Maybe<number>> {
        const response = await this.execute(this.sdk.getCount, vars);

        return response.repository?.ref?.target.history.totalCount;
    }

    async getList(variables: TCommitQueryVariables): Promise<TCommitHistoryEdges> {
        const args = { ...variables, limit: variables.limit ?? Query.PAGE_SIZE };
        const response = await this.execute(this.sdk.getList, args);
        const nodes: SDK.ICommitsHistoryFragment['edges'] = [];

        if (response.repository?.ref?.target) {
            const { history } = response.repository.ref.target;

            if (history.edges?.length) {
                const cursor = history.pageInfo.endCursor;
                const promises = [];
                const pagesCount = Math.ceil(history.totalCount / Query.PAGE_SIZE);
                let pageIndex = 0;

                while (pagesCount > pageIndex) {
                    promises.push(
                        this.execute(this.sdk.getFrom, {
                            ...args,
                            cursor: `${cursor} ${pageIndex++ * CommitQuery.PAGE_SIZE - 1}`,
                        })
                    );
                }

                nodes.push(
                    ...history.edges,
                    ...(await Promise.all(promises))
                        .map(page => page.repository?.ref?.target.history.edges)
                        .flat()
                        .filter(Boolean)
                );
            }
        }

        return nodes;
    }
}
