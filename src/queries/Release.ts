import * as Documents from '../documents/release.js';

import { ILastReleaseQuery, ILastReleaseQueryResult, ILastReleaseQueryVariables } from '../types/release.js';
import Query from './Query.js';

export default class ReleaseQuery extends Query {
  /** Get last release object */
  async getLast(variables: ILastReleaseQueryVariables): Promise<ILastReleaseQueryResult | undefined> {
    const response = await this.execute<ILastReleaseQuery>(Documents.getLastRelease, variables);

    return response.repository.releases.nodes[0];
  }
}
