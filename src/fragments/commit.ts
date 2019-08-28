export const CommitFragment = /* GraphQL */ `
    fragment CommitFragment on CommitHistoryConnection {
        edges {
            node {
                hash: oid
                header: messageHeadline
                body: messageBody
                url
                date: committedDate
                author {
                    avatar: avatarUrl
                    user {
                        id: databaseId
                        login
                        url
                    }
                }
            }
        }
    }
`;
