import { Variables } from 'graphql-request';

export interface IFileContentQuery {
  repository: {
    object: {
      text: string;
    };
  };
}

export interface IFileContentQueryVariables {
  expression: string;
  owner: string;
  repository: string;
}

export interface IFileIdQuery {
  repository: {
    ref: {
      target: {
        history: {
          nodes: {
            oid: string;
          }[];
        };
      };
    };
  };
}

export interface IFileIdQueryVariables extends Variables {
  branch: string;
  filePath: string;
  owner: string;
  repository: string;
  until: string;
}
