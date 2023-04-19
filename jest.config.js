
module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    moduleNameMapper: {
        '\\.scss$': 'identity-obj-proxy',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@fixture/(.*)$': '<rootDir>/fixture/$1',
        '^@src/(.*)$': '<rootDir>/src/$1',
    },
    collectCoverageFrom: ['<rootDir>/**/*.{ts, tsx}'],
    roots: ['<rootDir>'],
    modulePaths: [
        "<rootDir>",
        "<rootDir>/src",
        "<rootDir>/fixture"
    ],
    testRegex: '(/tests/jest/.*|(\\.|/)(test|spec))\\.(ts|tsx)$',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    snapshotResolver: "<rootDir>/tools/jest/snapshotResolver.js",
    setupFilesAfterEnv: [
        "<rootDir>/tools/jest/jest.setup.ts"
    ]
};
