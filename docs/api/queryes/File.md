# FileQuery

## Methods

### getContent

**Parameters:**

| Name         | Type   | Description        |
| ------------ | ------ | ------------------ |
| `owner`      | string | repo owner         |
| `repository` | string | repo name          |
| `oid`        | string | file object id     |
| `filePath`   | string | relative file path |

**Returns:** string with file content

---

### getId

**Parameters:**

| Name         | Type   | Description             |
| ------------ | ------ | ----------------------- |
| `owner`      | string | repo owner              |
| `repository` | string | repo name               |
| `branch`     | string | branch name             |
| `until`      | string | until date (ISO string) |
| `filePath`   | string | relative file path      |

**Returns:** file object id
