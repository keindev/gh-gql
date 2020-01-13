module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageReporters: ['text-summary', 'json'],
    globals: {
        'ts-jest': {
            babelConfig: {
                plugins: [
                    '@babel/plugin-proposal-optional-chaining',
                    '@babel/plugin-proposal-nullish-coalescing-operator',
                ],
            },
        },
    },
};
