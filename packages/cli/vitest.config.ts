import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    // Dev-time alias mirroring tsconfig paths: resolve the workspace dep
    // to source so `pnpm -r test` passes without a prior build. The built
    // CLI (dist/cli.js) resolves mr-hulla-core via node_modules instead.
    alias: { "mr-hulla-core": "../core/src/index.ts" },
  },
});
