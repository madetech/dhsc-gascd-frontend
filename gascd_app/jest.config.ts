import { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/tests/**/*.(test|spec).(ts|tsx)'],
  testResultsProcessor: 'jest-junit',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/test-utils/(.*)$': '<rootDir>/tests/utils/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json'
    }
  }
};

export default config;
