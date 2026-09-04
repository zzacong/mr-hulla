import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/cli.ts"],
  external: ["mr-hulla-core"],
  format: ["esm"],
  outExtensions: () => ({ js: ".js", dts: ".d.ts" }),
  sourcemap: true,
  clean: true,
});
