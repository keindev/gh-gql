
# Class: Provider

Provides access to the query objects

## Hierarchy

* **Provider**

## Index

### Constructors

* [constructor](provider.md#constructor)

### Properties

* [query](provider.md#query)
* [DEFAULT_USER_AGENT](provider.md#static-default_user_agent)
* [ENDPOINT](provider.md#static-endpoint)

## Constructors

###  constructor

\+ **new Provider**(`userAgent`: string): *[Provider](provider.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`userAgent` | string | Provider.DEFAULT_USER_AGENT |

**Returns:** *[Provider](provider.md)*

## Properties

###  query

• **query**: *IQuery*

___

### `Static` DEFAULT_USER_AGENT

▪ **DEFAULT_USER_AGENT**: *string* = `gh-gql ${getUserAgent()}`

___

### `Static` ENDPOINT

▪ **ENDPOINT**: *string* = "https://api.github.com/graphql"
