import { GitHubProvider } from '../src/provider';

describe('Provider', (): void => {
    const $date = new Date(0);
    const $provider = new GitHubProvider({
        repository: 'gh-gql',
        branch: 'master',
        owner: 'keindev',
    });

    it('Default', (): void => {
        expect($provider.commit).toBeDefined();
        expect($provider.package).toBeDefined();
        expect($provider.release).toBeDefined();
    });

    describe('Commit', (): void => {
        it('Get commits', (done): void => {
            const since = $date.getTime();

            Promise.all([$provider.commit.get($date, 0), $provider.commit.get($date, 1)]).then((results): void => {
                results.forEach((commits): void => {
                    expect(commits.length).toBeGreaterThanOrEqual(0);

                    commits.forEach((commit): void => {
                        expect(new Date(commit.date).getTime()).toBeGreaterThan(since);
                    });
                });

                done();
            });
        });

        it('Get commits count', (done): void => {
            Promise.all([$provider.commit.getCount($date), $provider.commit.getCount()]).then((results): void => {
                const [A, B] = results;

                expect(A).toBeGreaterThan(0);
                expect(A).toBe(B);

                done();
            });
        });
    });

    describe('Package', (): void => {
        it('Get changes', (done): void => {
            const date = new Date();

            $provider.package.getLastChange(date).then((change): void => {
                expect(change).toBeDefined();

                if (change) {
                    $provider.package.getContent(change).then((content): void => {
                        expect(content).toBeDefined();
                        expect(content.name).toBe('gh-gql');

                        done();
                    });
                }
            });
        });
    });

    describe('Release', (): void => {
        it('Get commits', (done): void => {
            $provider.release.getLast().then((release): void => {
                expect(release).toBeUndefined();

                done();
            });
        });
    });
});
