module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  preset: '@shelf/jest-mongodb',
  moduleFileExtensions: [
    'js',
    'json',
    'ts'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/main/server.ts'
  ]
}
