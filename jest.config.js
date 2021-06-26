export default {
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"]
};
