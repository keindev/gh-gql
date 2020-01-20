<p align="center"><img width="400" src="https://cdn.jsdelivr.net/gh/keindev/gh-gql/media/logo.svg" alt="GitHub GraphQL API client for JavaScript"></p>

<p align="center">
    <a href="https://travis-ci.com/keindev/gh-gql"><img src="https://travis-ci.com/keindev/gh-gql.svg?branch=master" alt="Build Status"></a>
    <a href="https://codecov.io/gh/keindev/gh-gql"><img src="https://codecov.io/gh/keindev/gh-gql/branch/master/graph/badge.svg" /></a>
    <a href="https://www.npmjs.com/package/gh-gql"><img alt="npm" src="https://img.shields.io/npm/v/gh-gql.svg"></a>
    <a href="https://www.npmjs.com/package/gh-gql"><img alt="NPM" src="https://img.shields.io/npm/l/gh-gql.svg"></a>
</p>

GitHub GraphQL API helper for TypeScript

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
const { Provider } = require('gh-gql');
const { query } = new Provider();

query.commit.getCount({ branch: 'dev', owner: 'keindev', repository: 'gh-gql' }).then(count => {
    process.stdout.write(`${count} awesome commits\n`);
});
```

## API

Read the [API documentation](docs/api/README.md) for more information.

## License

[MIT](LICENSE)
