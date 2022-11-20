import { gql } from 'graphql-request';

export const getRepository = gql`
  query getRepository($repository: String!) {
    viewer {
      repository(name: $repository) {
        name
        createdAt
        updatedAt
        description
        homepageUrl
        isArchived
        isDisabled
        isFork
        isLocked
        isMirror
        isPrivate
        isTemplate
        owner {
          login
        }
        primaryLanguage {
          name
        }
        licenseInfo {
          name
        }
      }
    }
  }
`;

export const getRepositories = gql`
  query getRepositoriesNames($login: String!, $limit: Int!) {
    user(login: $login) {
      repositories(first: $limit) {
        nodes {
          name
        }
      }
    }
  }
`;
