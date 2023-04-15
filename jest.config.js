module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.spec.ts'],
  testTimeout: 60000,
  moduleNameMapper: {
    '^@/src(.*)$': '<rootDir>/src/$1',
  },
};
