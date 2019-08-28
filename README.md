# gh-gql

GitHub GraphQL API client for JavaScript

## Install

### Yarn

```console
yarn add gh-gql
```

### NPM

```console
npm install gh-gql
```

## Usage

> Make sure the token `GITHUB_TOKEN` is available as an environment variable.

```JavaScript
const { GitHubProvider } = require('../lib/provider');

const provider = new GitHubProvider({
    branch: 'dev',
    owner: 'keindev',
    repository: 'gh-gql',
});

provider.commit.getCommitsCount().then(count => {
    process.stdout.write(`${count} awesome commits\n`);
});
```

## API

'GitHubProvider' provides access to the following query objects:

-   `provider.commit.*` - contains methods for getting commits information
-   `provider.package.*` - contains methods for getting `package.json` information
-   `provider.release.*` - contains methods for obtaining information about repository releases

### Commit

#### getCommits(date, [pageIndex])

Returns the first 100 commits, starting from the specified date, with the possibility of pagination.

##### date

Type: `Date`

Sampling start date.

##### pageIndex

Type: `number`

Page index.

#### getCommitsCount([date])

Returns commits count, starting from the specified date.

##### date

Type: `Date`

Sampling start date. If no date is specified, the total number of commits will be received.

### Package

#### getChanges(date)

#### getContent(change)

### Release

#### getLast()
