# CommitQuery

## Methods

### getCount

**Parameters:**

| Name         | Type   | Description             |
| ------------ | ------ | ----------------------- |
| `owner`      | string | repo owner              |
| `repository` | string | repo name               |
| `branch`     | string | branch name             |
| `since`      | string | since date (ISO string) |

**Returns:** count of commits from `since` date

---

### getList

> Loads a commits from the specified date page by page

**Parameters:**

| Name         | Type   | Description                |
| ------------ | ------ | -------------------------- |
| `owner`      | string | repo owner                 |
| `repository` | string | repo name                  |
| `branch`     | string | branch name                |
| `since`      | string | since date (ISO string)    |
| `limit`      | number | number of commits per page |

**Returns:** list of commits from `since` date
