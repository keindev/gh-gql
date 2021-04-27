# Class: default

[queries/Release](../modules/queries_release.md).default

## Hierarchy

* [*default*](queries_query.default.md)<ReturnType<*typeof* SDK.getSdk\>\>

  ↳ **default**

## Table of contents

### Constructors

- [constructor](queries_release.default.md#constructor)

### Properties

- [DELIMITER](queries_release.default.md#delimiter)
- [PAGE\_SIZE](queries_release.default.md#page_size)
- [TAB\_WIDTH](queries_release.default.md#tab_width)

### Methods

- [getLast](queries_release.default.md#getlast)

## Constructors

### constructor

\+ **new default**(`client`: *GraphQLClient*): [*default*](queries_release.default.md)

#### Parameters:

| Name | Type |
| :------ | :------ |
| `client` | *GraphQLClient* |

**Returns:** [*default*](queries_release.default.md)

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

### getLast

▸ **getLast**(`variables`: *Exact*<{ `owner`: *string* ; `repository`: *string*  }\>): *Promise*<undefined \| { `id`: *string* ; `publishedAt`: *Maybe*<string\> ; `tagName`: *string*  }\>

Get last release object

#### Parameters:

| Name | Type |
| :------ | :------ |
| `variables` | *Exact*<{ `owner`: *string* ; `repository`: *string*  }\> |

**Returns:** *Promise*<undefined \| { `id`: *string* ; `publishedAt`: *Maybe*<string\> ; `tagName`: *string*  }\>
