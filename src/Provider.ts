import dotenv from 'dotenv';
import { getUserAgent } from 'universal-user-agent';
import { GraphQLClient } from 'graphql-request';
import CommitQuery from './queries/Commit';
import FileQuery from './queries/File';
import ReleaseQuery from './queries/Release';
import RepositoryQuery from './queries/Repository';

dotenv.config();

type TQuery = CommitQuery | FileQuery | ReleaseQuery | RepositoryQuery | undefined;

interface IQuery {
    commit: CommitQuery;
    file: FileQuery;
    release: ReleaseQuery;
    repository: RepositoryQuery;
}

export class Provider {
    public static DEFAULT_USER_AGENT = `gh-gql ${getUserAgent()}`;
    public static ENDPOINT = 'https://api.github.com/graphql';

    public readonly query: IQuery;

    private readonly queries: Map<keyof IQuery, TQuery> = new Map();

    public constructor(userAgent: string = Provider.DEFAULT_USER_AGENT) {
        const client = new GraphQLClient(Provider.ENDPOINT, {
            method: 'POST',
            headers: { userAgent, authorization: `token ${process.env.GITHUB_TOKEN}` },
        });

        this.query = new Proxy<IQuery>({} as IQuery, {
            get: (target, name: keyof IQuery): TQuery => {
                if (!this.queries.has(name)) {
                    let query;

                    switch (name) {
                        case 'commit':
                            query = new CommitQuery(client);
                            break;
                        case 'file':
                            query = new FileQuery(client);
                            break;
                        case 'release':
                            query = new ReleaseQuery(client);
                            break;
                        case 'repository':
                            query = new RepositoryQuery(client);
                            break;
                        default:
                            query = undefined;
                            break;
                    }

                    if (query) this.queries.set(name, query);
                }

                return this.queries.get(name);
            },
        });
    }
}
