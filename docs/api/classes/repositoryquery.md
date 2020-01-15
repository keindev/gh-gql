
# Class: RepositoryQuery

## Hierarchy

* Query‹ReturnType‹getSdk››

  ↳ **RepositoryQuery**

## Index

### Constructors

* [constructor](repositoryquery.md#constructor)

### Properties

* [DELIMITER](repositoryquery.md#static-delimiter)
* [PAGE_SIZE](repositoryquery.md#static-page_size)

### Methods

* [getInfo](repositoryquery.md#getinfo)

## Constructors

###  constructor

\+ **new RepositoryQuery**(`client`: GraphQLClient): *[RepositoryQuery](repositoryquery.md)*

*Overrides Query.constructor*

**Parameters:**

Name | Type |
------ | ------ |
`client` | GraphQLClient |

**Returns:** *[RepositoryQuery](repositoryquery.md)*

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

###  getInfo

▸ **getInfo**(`variables`: SDK.IGetInfoQueryVariables): *Promise‹SDK.IGetInfoQuery["viewer"]["repository"]›*

**Parameters:**

Name | Type |
------ | ------ |
`variables` | SDK.IGetInfoQueryVariables |

**Returns:** *Promise‹SDK.IGetInfoQuery["viewer"]["repository"]›*
