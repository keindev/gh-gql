import { Variables } from 'graphql-request';

export interface IRepositoryQuery {
  viewer: {
    repository: {
      createdAt: string;
      description: string | null;
      homepageUrl: string | null;
      isArchived: boolean;
      isDisabled: boolean;
      isFork: boolean;
      isLocked: boolean;
      isMirror: boolean;
      isPrivate: boolean;
      isTemplate: boolean;
      licenseInfo: {
        name: string;
      } | null;
      name: string;
      owner: {
        login: string;
      };
      primaryLanguage: {
        name: string;
      } | null;
      updatedAt: string;
    };
  };
}

export interface IRepositoryQueryVariables extends Variables {
  repository: string;
}

export interface IRepositoryListQuery {
  user: {
    repositories: {
      nodes: {
        name: string;
      }[];
    };
  };
}

export interface IRepositoryListQueryVariables extends Variables {
  limit: number;
  login: string;
}

export type IRepositoryQueryResult = IRepositoryQuery['viewer']['repository'];
