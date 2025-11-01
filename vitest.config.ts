import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
    coverage: {
      provider: "v8",
      include: ["app/**"],
      exclude: ["app/layout.tsx"],
      thresholds: {
        lines: 100,
      },
    },
  },
});
