import { gql } from 'graphql-request';

export const getLastRelease = gql`
  query getLastRelease($owner: String!, $repository: String!) {
    repository(owner: $owner, name: $repository) {
      releases(last: 1) {
        nodes {
          id
          tagName
          publishedAt
        }
      }
    }
  }
`;
