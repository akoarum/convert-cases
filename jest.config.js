module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '!**/node_modules/**',
    '!**/dist/**',
    '!src/index.ts'
  ],
}
