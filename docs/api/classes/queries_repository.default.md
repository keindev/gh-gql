# Class: default

[queries/Repository](../modules/queries_repository.md).default

## Hierarchy

* [*default*](queries_query.default.md)<ReturnType<*typeof* SDK.getSdk\>\>

  ↳ **default**

## Table of contents

### Constructors

- [constructor](queries_repository.default.md#constructor)

### Properties

- [DELIMITER](queries_repository.default.md#delimiter)
- [PAGE\_SIZE](queries_repository.default.md#page_size)
- [TAB\_WIDTH](queries_repository.default.md#tab_width)

### Methods

- [getInfo](queries_repository.default.md#getinfo)
- [getList](queries_repository.default.md#getlist)

## Constructors

### constructor

\+ **new default**(`client`: *GraphQLClient*): [*default*](queries_repository.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`client` | *GraphQLClient* |

**Returns:** [*default*](queries_repository.default.md)

Overrides: [default](queries_query.default.md)

## Properties

### DELIMITER

▪ `Static` `Readonly` **DELIMITER**: *
*= '\n'

Inherited from: [default](queries_query.default.md).[DELIMITER](queries_query.default.md#delimiter)

___

### PAGE\_SIZE

▪ `Static` `Readonly` **PAGE\_SIZE**: *100*= 100

Inherited from: [default](queries_query.default.md).[PAGE_SIZE](queries_query.default.md#page_size)

___

### TAB\_WIDTH

▪ `Static` `Readonly` **TAB\_WIDTH**: *2*= 2

Inherited from: [default](queries_query.default.md).[TAB_WIDTH](queries_query.default.md#tab_width)

## Methods

### getInfo

▸ **getInfo**(`variables`: *Exact*<{ `repository`: *string*  }\>): *Promise*<undefined \| { `createdAt`: *string* ; `description`: *Maybe*<string\> ; `homepageUrl`: *Maybe*<string\> ; `isArchived`: *boolean* ; `isDisabled`: *boolean* ; `isFork`: *boolean* ; `isLocked`: *boolean* ; `isMirror`: *boolean* ; `isPrivate`: *boolean* ; `isTemplate`: *boolean* ; `licenseInfo`: *Maybe*<{ `name`: *string*  }\> ; `name`: *string* ; `owner`: { `login`: *string*  } \| { `login`: *string*  } ; `primaryLanguage`: *Maybe*<{ `name`: *string*  }\> ; `updatedAt`: *string*  }\>

Get information about repository

#### Parameters:

Name | Type |
:------ | :------ |
`variables` | *Exact*<{ `repository`: *string*  }\> |

**Returns:** *Promise*<undefined \| { `createdAt`: *string* ; `description`: *Maybe*<string\> ; `homepageUrl`: *Maybe*<string\> ; `isArchived`: *boolean* ; `isDisabled`: *boolean* ; `isFork`: *boolean* ; `isLocked`: *boolean* ; `isMirror`: *boolean* ; `isPrivate`: *boolean* ; `isTemplate`: *boolean* ; `licenseInfo`: *Maybe*<{ `name`: *string*  }\> ; `name`: *string* ; `owner`: { `login`: *string*  } \| { `login`: *string*  } ; `primaryLanguage`: *Maybe*<{ `name`: *string*  }\> ; `updatedAt`: *string*  }\>

___

### getList

▸ **getList**(`variables`: *Exact*<{ `limit`: *number* ; `login`: *string*  }\>): *Promise*<string[]\>

Get list of repositories for user

#### Parameters:

Name | Type |
:------ | :------ |
`variables` | *Exact*<{ `limit`: *number* ; `login`: *string*  }\> |

**Returns:** *Promise*<string[]\>
