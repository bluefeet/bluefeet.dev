import type { Config } from "@jest/types";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config.ConfigGlobals = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverageFrom: ["app/**"],
  coverageThreshold: {
    global: {
      lines: 98,
    },
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/__snapshots__/",
    "/app/testing.ts",
    // Ignore these since they will never be unit tested as long as many npm modules cannot be used in jest tests.
    "/app/layout.tsx",
    "/app/UnjestableProviders.tsx",
    "/app/RenderMarkdown.tsx",
  ],
};

export default createJestConfig(config);
