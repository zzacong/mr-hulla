# mr-hulla-go

## 0.1.1

### Patch Changes

- 04fdf83: Declare the prebuilt binary in each platform package's `bin` field. Packagers normalize tarball modes to 644 for non-bin files, so installed binaries were not executable (`EACCES` on first run). Bin-field entries ship 755; the launcher also repairs a missing exec bit as a fallback.
- f73f3e3: Go tool now appends "(go)" to its greeting — `mr-hulla-go ada` prints `yo, from ada (go)!` — so the Go binary is distinguishable from the TS CLI.
