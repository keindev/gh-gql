import { gql } from 'graphql-request';

export const getCommitListTotal = gql`
  query getCommitListTotal($owner: String!, $repository: String!, $branch: String!, $since: GitTimestamp!) {
    repository(owner: $owner, name: $repository) {
      ref(qualifiedName: $branch) {
        target {
          ... on Commit {
            history(since: $since) {
              totalCount
            }
          }
        }
      }
    }
  }
`;

export const getCommitListLastNode = gql`
  query getCommitListLastNode($owner: String!, $repository: String!, $branch: String!) {
    repository(owner: $owner, name: $repository) {
      object(expression: $branch) {
        ... on Commit {
          history(first: 1) {
            edges {
              node {
                commitUrl
                committer {
                  name
                }
                committedDate
              }
            }
          }
        }
      }
    }
  }
`;

const commitListHistoryFragment = gql`
  fragment CommitsHistory on CommitHistoryConnection {
    edges {
      node {
        oid
        messageHeadline
        messageBody
        url
        committedDate
        author {
          avatarUrl
          user {
            databaseId
            login
            url
          }
        }
      }
    }
  }
`;

export const getCommitList = gql`
  query getCommitList($owner: String!, $repository: String!, $branch: String!, $limit: Int!, $since: GitTimestamp!) {
    repository(owner: $owner, name: $repository) {
      ref(qualifiedName: $branch) {
        target {
          ... on Commit {
            history(since: $since, first: $limit) {
              totalCount
              pageInfo {
                endCursor
                hasNextPage
              }
              ...CommitsHistory
            }
          }
        }
      }
    }
  }
  ${commitListHistoryFragment}
`;

export const getCommitListFrom = gql`
  query getCommitListFrom(
    $owner: String!
    $repository: String!
    $branch: String!
    $limit: Int!
    $since: GitTimestamp!
    $cursor: String!
  ) {
    repository(owner: $owner, name: $repository) {
      ref(qualifiedName: $branch) {
        target {
          ... on Commit {
            history(since: $since, first: $limit, after: $cursor) {
              ...CommitsHistory
            }
          }
        }
      }
    }
  }
  ${commitListHistoryFragment}
`;
