// Cross-compile the Go tool for every platform package.
// Bins land in the sibling platform dirs (packages/go-*/bin), which are
// gitignored but published (files: ["bin"]). CGO is off: the tool is pure
// Go, so static cross-compiles work from any host.
import { execFileSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const TARGETS = [
  { dir: "go-darwin-arm64", goos: "darwin", goarch: "arm64", out: "mr-hulla-go" },
  { dir: "go-darwin-amd64", goos: "darwin", goarch: "amd64", out: "mr-hulla-go" },
  { dir: "go-linux-x64", goos: "linux", goarch: "amd64", out: "mr-hulla-go" },
  { dir: "go-linux-arm64", goos: "linux", goarch: "arm64", out: "mr-hulla-go" },
  // Windows needs the .exe extension or the launcher can't spawn it.
  { dir: "go-windows-x64", goos: "windows", goarch: "amd64", out: "mr-hulla-go.exe" },
];

const wrapperDir = dirname(dirname(fileURLToPath(import.meta.url)));
const packages = dirname(wrapperDir);

for (const target of TARGETS) {
  const out = join(packages, target.dir, "bin", target.out);
  mkdirSync(dirname(out), { recursive: true });
  execFileSync("go", ["build", "-trimpath", "-o", out, "."], {
    cwd: wrapperDir,
    env: {
      ...process.env,
      CGO_ENABLED: "0",
      GOOS: target.goos,
      GOARCH: target.goarch,
    },
    stdio: "inherit",
  });
}
