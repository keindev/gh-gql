// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Provider } = require('../lib/Provider');
const { query } = new Provider();

query.commit.getCount({ branch: 'dev', owner: 'keindev', repository: 'gh-gql' }).then(count => {
  process.stdout.write(`${count} awesome commits\n`);
});
