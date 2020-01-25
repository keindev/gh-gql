
# Class: FileQuery

Query for receive information about files in repository

## Hierarchy

* Query‹ReturnType‹typeof getSdk››

  ↳ **FileQuery**

## Index

### Constructors

* [constructor](filequery.md#constructor)

### Properties

* [DELIMITER](filequery.md#static-delimiter)
* [PAGE_SIZE](filequery.md#static-page_size)

### Methods

* [getContent](filequery.md#getcontent)
* [getLastChange](filequery.md#getlastchange)

## Constructors

###  constructor

\+ **new FileQuery**(`client`: GraphQLClient): *[FileQuery](filequery.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`client` | GraphQLClient |

**Returns:** *[FileQuery](filequery.md)*

## Properties

### `Static` DELIMITER

▪ **DELIMITER**: *string* = "
"

*Inherited from void*

___

### `Static` PAGE_SIZE

▪ **PAGE_SIZE**: *number* = 100

*Inherited from void*

## Methods

###  getContent

▸ **getContent**(`__namedParameters`: object): *Promise‹[Maybe](../README.md#maybe)‹string››*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`filePath` | string |
`oid` | string |
`others` | others |

**Returns:** *Promise‹[Maybe](../README.md#maybe)‹string››*

___

###  getLastChange

▸ **getLastChange**(`variables`: SDK.IGetLastChangeQueryVariables): *Promise‹[Maybe](../README.md#maybe)‹string››*

**Parameters:**

Name | Type |
------ | ------ |
`variables` | SDK.IGetLastChangeQueryVariables |

**Returns:** *Promise‹[Maybe](../README.md#maybe)‹string››*
