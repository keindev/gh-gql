# Module: queries/Commit

## Table of contents

### Classes

- [default](../classes/queries_commit.default.md)

### Type aliases

- [ICommit](queries_commit.md#icommit)
- [ILastCommitInfo](queries_commit.md#ilastcommitinfo)

## Type aliases

### ICommit

Ƭ **ICommit**: *Omit*<CommitNode, ``"author"``\> & { `author`: *Omit*<CommitNodeAuthor, ``"user"``\> & { `user`: CommitNodeAuthorUser  }  }

___

### ILastCommitInfo

Ƭ **ILastCommitInfo**: *Omit*<LastCommitNode, ``"committer"``\> & { `committer`: *Omit*<LastCommitCommitter, ``"name"``\> & { `name`: *NonNullable*<LastCommitCommitter[``"name"``]\>  }  }
