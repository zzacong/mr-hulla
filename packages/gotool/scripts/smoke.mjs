// Host-only smoke test for the launcher. Cross-built binaries for other
// platforms can't exec here, so only the host binary is exercised;
// `pnpm run build` (also wired into `test`) produces it first.
import assert from "node:assert";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const launcher = join(dirname(dirname(fileURLToPath(import.meta.url))), "bin", "mr-hulla-go.mjs");

const run = (...args) => execFileSync("node", [launcher, ...args], { encoding: "utf8" });

assert.strictEqual(run("ada"), "yo, from ada!\n");
assert.strictEqual(run(), "yo, from mr hulla!\n");
assert.strictEqual(run("   "), "yo, from mr hulla!\n");

console.log("smoke: mr-hulla-go launcher ok");
