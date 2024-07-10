module.exports = {
  testEnvironment: "node",
  preset: "ts-jest",
  testMatch: ["**/**/*.test.ts"],
  verbose: true,
  forceExit: true,
  // clearMock: true
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
};
