# mr-hulla-go

Minimal experimental CLI in Go. `npx mr-hulla-go` prints `yo, from mr hulla!`.

This is the npm wrapper: it installs the prebuilt binary for your platform
(`darwin`/`linux` on `arm64`/`x64`, plus `windows` on `x64`) via
`optionalDependencies` and runs it through `bin/mr-hulla-go.mjs`.
Source: [zzacong/mr-hulla](https://github.com/zzacong/mr-hulla).

## Use

```sh
npx mr-hulla-go          # yo, from mr hulla!
npx mr-hulla-go ada      # yo, from ada!
```

Requires Node `>=20`. Linux binaries are built against glibc — musl-based
distros (e.g. Alpine) are not supported.

## Develop

From the repo root:

```sh
pnpm install
pnpm --filter mr-hulla-go run build   # cross-compile all 5 platform bins
pnpm --filter mr-hulla-go run test    # go test + build + launcher smoke test
node ./packages/gotool/bin/mr-hulla-go.mjs ada
```

Go source lives in `packages/gotool` (`main.go`, `main_test.go`) and is
excluded from the published tarball; the per-platform binaries in
`packages/go-*/bin` are built artifacts (gitignored) produced by the
wrapper's `build` script.

## License

MIT. See [LICENSE](./LICENSE).
