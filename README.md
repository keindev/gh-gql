<p align="center"><img width="400" src="https://cdn.jsdelivr.net/gh/keindev/gh-gql/media/logo.svg" alt="Changelog-guru logo"></p>

<p align="center">
    <a href="https://travis-ci.com/keindev/gh-gql"><img src="https://travis-ci.com/keindev/gh-gql.svg?branch=master" alt="Build Status"></a>
    <a href="https://codecov.io/gh/keindev/gh-gql"><img src="https://codecov.io/gh/keindev/gh-gql/branch/master/graph/badge.svg" /></a>
    <a href="https://www.npmjs.com/package/gh-gql"><img alt="npm" src="https://img.shields.io/npm/v/gh-gql.svg"></a>
    <a href="https://www.npmjs.com/package/gh-gql"><img alt="NPM" src="https://img.shields.io/npm/l/gh-gql.svg"></a>

</p>

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
const { GitHubProvider } = require('gh-gql');

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

-   `provider.commit.*` - for obtaining information about commits
-   `provider.package.*` - for obtaining information about `package.json`
-   `provider.release.*` - for obtaining information about repository releases

### Commit

#### getList(since, [pageIndex])

Returns the first 100 commits, starting from the specified date, with the possibility of pagination.

##### since

Type: `Date`

Sampling start date.

##### pageIndex

Type: `number`

Page index.

#### getCount([since])

Returns commits count, starting from the specified date.

##### since

Type: `Date`

Sampling start date. If no date is specified, the total number of commits will be received.

### Package

Contains methods for obtaining data about the status of `package.json`.

#### getLastChange(until)

Returns a pointer to the last change until the specified date.

##### until

Type: `Date`

Date until which sampling is performed.

#### getContent(change)

By pointer to change, returns the contents `package.json`

##### change

Type: `Object`

The change pointer.

### Release

Contains methods for obtaining release data.

#### getLast()

Returns tag and date of last release.

## License

[MIT](LICENSE)
