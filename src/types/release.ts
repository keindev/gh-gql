import { IArrayElement } from './base.js';

export interface ILastReleaseQuery {
  repository: {
    releases: {
      nodes: {
        id: string;
        publishedAt: string | null;
        tagName: string;
      }[];
    };
  };
}

export interface ILastReleaseQueryVariables {
  owner: string;
  repository: string;
}

export type ILastReleaseQueryResult = IArrayElement<ILastReleaseQuery['repository']['releases']['nodes']>;
