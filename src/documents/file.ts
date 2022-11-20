import { gql } from 'graphql-request';

export const getFileContent = gql`
  query getFileContent($owner: String!, $repository: String!, $expression: String!) {
    repository(owner: $owner, name: $repository) {
      object(expression: $expression) {
        ... on Blob {
          text
        }
      }
    }
  }
`;

export const getFileId = gql`
  query getFileId($owner: String!, $repository: String!, $branch: String!, $until: GitTimestamp!, $filePath: String!) {
    repository(owner: $owner, name: $repository) {
      ref(qualifiedName: $branch) {
        target {
          ... on Commit {
            history(path: $filePath, until: $until, first: 2) {
              nodes {
                oid
              }
            }
          }
        }
      }
    }
  }
`;
