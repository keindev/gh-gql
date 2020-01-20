
# Class: CommitQuery

## Hierarchy

* Query‹ReturnType‹[getSdk](../README.md#getsdk)››

  ↳ **CommitQuery**

## Index

### Constructors

* [constructor](commitquery.md#constructor)

### Properties

* [DELIMITER](commitquery.md#static-delimiter)
* [PAGE_SIZE](commitquery.md#static-page_size)

### Methods

* [getCount](commitquery.md#getcount)
* [getList](commitquery.md#getlist)

## Constructors

###  constructor

\+ **new CommitQuery**(`client`: GraphQLClient): *[CommitQuery](commitquery.md)*

*Overrides Query.constructor*

**Parameters:**

Name | Type |
------ | ------ |
`client` | GraphQLClient |

**Returns:** *[CommitQuery](commitquery.md)*

## Properties

### `Static` DELIMITER

▪ **DELIMITER**: *string* = "
"

*Inherited from Query.DELIMITER*

___

### `Static` PAGE_SIZE

▪ **PAGE_SIZE**: *number* = 100

*Inherited from Query.PAGE_SIZE*

## Methods

###  getCount

▸ **getCount**(`__namedParameters`: object): *Promise‹[Maybe](../README.md#maybe)‹number››*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`others` | others |
`since` | string |

**Returns:** *Promise‹[Maybe](../README.md#maybe)‹number››*

___

###  getList

▸ **getList**(`variables`: [TCommitQueryVariables](../README.md#tcommitqueryvariables)): *Promise‹[TCommitHistoryEdges](../README.md#tcommithistoryedges)›*

**Parameters:**

Name | Type |
------ | ------ |
`variables` | [TCommitQueryVariables](../README.md#tcommitqueryvariables) |

**Returns:** *Promise‹[TCommitHistoryEdges](../README.md#tcommithistoryedges)›*
