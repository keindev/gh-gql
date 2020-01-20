
# Class: ReleaseQuery

## Hierarchy

* Query‹ReturnType‹getSdk››

  ↳ **ReleaseQuery**

## Index

### Constructors

* [constructor](releasequery.md#constructor)

### Properties

* [DELIMITER](releasequery.md#static-delimiter)
* [PAGE_SIZE](releasequery.md#static-page_size)

### Methods

* [getLast](releasequery.md#getlast)

## Constructors

###  constructor

\+ **new ReleaseQuery**(`client`: GraphQLClient): *[ReleaseQuery](releasequery.md)*

*Overrides Query.constructor*

**Parameters:**

Name | Type |
------ | ------ |
`client` | GraphQLClient |

**Returns:** *[ReleaseQuery](releasequery.md)*

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

###  getLast

▸ **getLast**(`variables`: SDK.IGetLastQueryVariables): *Promise‹[TReleaseInfo](../README.md#treleaseinfo)›*

**Parameters:**

Name | Type |
------ | ------ |
`variables` | SDK.IGetLastQueryVariables |

**Returns:** *Promise‹[TReleaseInfo](../README.md#treleaseinfo)›*
