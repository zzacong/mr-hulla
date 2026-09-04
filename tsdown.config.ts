import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts", "src/cli.ts"],
  format: ["esm"],
  outExtensions: () => ({ js: ".js", dts: ".d.ts" }),
  dts: true,
  sourcemap: true,
  clean: true,
});
