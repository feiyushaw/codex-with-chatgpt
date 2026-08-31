import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/**/*.test.ts"],
    exclude: ["**/node_modules/**", "**/dist/**", "**/._*"],
    testTimeout: 30_000,
    hookTimeout: 30_000,
    pool: "threads",
  },
});
