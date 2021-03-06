# Class: default

[queries/Commit](../modules/queries_commit.md).default

## Hierarchy

* [*default*](queries_query.default.md)<ReturnType<*typeof* SDK.getSdk\>\>

  ↳ **default**

## Table of contents

### Constructors

- [constructor](queries_commit.default.md#constructor)

### Properties

- [DELIMITER](queries_commit.default.md#delimiter)
- [PAGE\_SIZE](queries_commit.default.md#page_size)
- [TAB\_WIDTH](queries_commit.default.md#tab_width)

### Methods

- [getCount](queries_commit.default.md#getcount)
- [getList](queries_commit.default.md#getlist)

## Constructors

### constructor

\+ **new default**(`client`: *GraphQLClient*): [*default*](queries_commit.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`client` | *GraphQLClient* |

**Returns:** [*default*](queries_commit.default.md)

Inherited from: [default](queries_query.default.md)

## Properties

### DELIMITER

▪ `Readonly` `Static` **DELIMITER**: *
*= '\n'

Inherited from: [default](queries_query.default.md).[DELIMITER](queries_query.default.md#delimiter)

___

### PAGE\_SIZE

▪ `Readonly` `Static` **PAGE\_SIZE**: *100*= 100

Inherited from: [default](queries_query.default.md).[PAGE_SIZE](queries_query.default.md#page_size)

___

### TAB\_WIDTH

▪ `Readonly` `Static` **TAB\_WIDTH**: *2*= 2

Inherited from: [default](queries_query.default.md).[TAB_WIDTH](queries_query.default.md#tab_width)

## Methods

### getCount

▸ **getCount**(`__namedParameters`: *Exact*<{ `branch`: *string* ; `owner`: *string* ; `repository`: *string* ; `since`: *string*  }\>): *Promise*<number\>

Get the number of commits since a specific date

#### Parameters:

Name | Type |
:------ | :------ |
`__namedParameters` | *Exact*<{ `branch`: *string* ; `owner`: *string* ; `repository`: *string* ; `since`: *string*  }\> |

**Returns:** *Promise*<number\>

___

### getList

▸ **getList**(`__namedParameters`: *Exact*<{ `branch`: *string* ; `limit`: *number* ; `owner`: *string* ; `repository`: *string* ; `since`: *string*  }\>): *Promise*<[*ICommit*](../modules/queries_commit.md#icommit)[]\>

Get limited list of comments since a specific date

#### Parameters:

Name | Type |
:------ | :------ |
`__namedParameters` | *Exact*<{ `branch`: *string* ; `limit`: *number* ; `owner`: *string* ; `repository`: *string* ; `since`: *string*  }\> |

**Returns:** *Promise*<[*ICommit*](../modules/queries_commit.md#icommit)[]\>
