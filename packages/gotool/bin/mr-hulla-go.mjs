#!/usr/bin/env node
// Resolve the platform-specific binary and run it, passing through args,
// stdio, and the exit code. The platform package is an optionalDependency
// of the wrapper, so require.resolve finds it under any package manager
// layout (including pnpm's non-hoisted node_modules).
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { join } from "node:path";

// Node says x64/win32; Go and npm say amd64/windows. Normalize here.
const TABLE = {
  "darwin:arm64": { pkg: "mr-hulla-go-darwin-arm64", bin: "mr-hulla-go" },
  "darwin:x64": { pkg: "mr-hulla-go-darwin-amd64", bin: "mr-hulla-go" },
  "linux:x64": { pkg: "mr-hulla-go-linux-x64", bin: "mr-hulla-go" },
  "linux:arm64": { pkg: "mr-hulla-go-linux-arm64", bin: "mr-hulla-go" },
  "win32:x64": { pkg: "mr-hulla-go-windows-x64", bin: "mr-hulla-go.exe" },
};

const entry = TABLE[`${process.platform}:${process.arch}`];
if (!entry) {
  console.error(`mr-hulla-go: unsupported platform ${process.platform}/${process.arch}`);
  process.exit(1);
}

const require = createRequire(import.meta.url);
let pkgDir;
try {
  pkgDir = join(require.resolve(`${entry.pkg}/package.json`), "..");
} catch {
  console.error(`mr-hulla-go: platform package ${entry.pkg} is not installed`);
  process.exit(1);
}

const result = spawnSync(join(pkgDir, "bin", entry.bin), process.argv.slice(2), {
  stdio: "inherit",
});
if (result.error) {
  console.error(`mr-hulla-go: failed to run ${entry.bin}: ${result.error.message}`);
  process.exit(1);
}
process.exit(result.status ?? 1);
