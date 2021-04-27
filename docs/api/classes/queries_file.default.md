# Class: default

[queries/File](../modules/queries_file.md).default

## Hierarchy

* [*default*](queries_query.default.md)<ReturnType<*typeof* SDK.getSdk\>\>

  ↳ **default**

## Table of contents

### Constructors

- [constructor](queries_file.default.md#constructor)

### Properties

- [DELIMITER](queries_file.default.md#delimiter)
- [PAGE\_SIZE](queries_file.default.md#page_size)
- [TAB\_WIDTH](queries_file.default.md#tab_width)

### Methods

- [getContent](queries_file.default.md#getcontent)
- [getId](queries_file.default.md#getid)

## Constructors

### constructor

\+ **new default**(`client`: *GraphQLClient*): [*default*](queries_file.default.md)

#### Parameters:

| Name | Type |
| :------ | :------ |
| `client` | *GraphQLClient* |

**Returns:** [*default*](queries_file.default.md)

Overrides: [default](queries_query.default.md)

## Properties

### DELIMITER

▪ `Static` `Readonly` **DELIMITER**: ``"\n"``= '\n'

Inherited from: [default](queries_query.default.md).[DELIMITER](queries_query.default.md#delimiter)

___

### PAGE\_SIZE

▪ `Static` `Readonly` **PAGE\_SIZE**: ``100``= 100

Inherited from: [default](queries_query.default.md).[PAGE_SIZE](queries_query.default.md#page_size)

___

### TAB\_WIDTH

▪ `Static` `Readonly` **TAB\_WIDTH**: ``2``= 2

Inherited from: [default](queries_query.default.md).[TAB_WIDTH](queries_query.default.md#tab_width)

## Methods

### getContent

▸ **getContent**(`__namedParameters`: [*IGetContentOptions*](../modules/queries_file.md#igetcontentoptions)): *Promise*<undefined \| string\>

Get file content

#### Parameters:

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [*IGetContentOptions*](../modules/queries_file.md#igetcontentoptions) |

**Returns:** *Promise*<undefined \| string\>

___

### getId

▸ **getId**(`variables`: *Exact*<{ `branch`: *string* ; `filePath`: *string* ; `owner`: *string* ; `repository`: *string* ; `until`: *string*  }\>): *Promise*<undefined \| string\>

Get a file object id

#### Parameters:

| Name | Type |
| :------ | :------ |
| `variables` | *Exact*<{ `branch`: *string* ; `filePath`: *string* ; `owner`: *string* ; `repository`: *string* ; `until`: *string*  }\> |

**Returns:** *Promise*<undefined \| string\>
