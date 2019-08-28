// eslint-disable-next-line @typescript-eslint/no-var-requires
const { GitHubProvider } = require('../lib/provider');

const provider = new GitHubProvider({
    branch: 'dev',
    owner: 'keindev',
    repository: 'gh-gql',
});

provider.commit.getCommitsCount().then(count => {
    process.stdout.write(`${count} awesome commits\n`);
});
