# mr-hulla-go

Minimal experimental CLI in Go. `npx mr-hulla-go` prints `yo, from mr hulla (go)!`.

This is the npm wrapper: it installs the prebuilt binary for your platform
(`darwin`/`linux` on `arm64`/`x64`, plus `windows` on `x64`) via
`optionalDependencies` and runs it through `bin/mr-hulla-go.mjs`.
Source: [zzacong/mr-hulla](https://github.com/zzacong/mr-hulla).

## Use

```sh
npx mr-hulla-go          # yo, from mr hulla (go)!
npx mr-hulla-go ada      # yo, from ada (go)!
```

## Install

```sh
npm i -g mr-hulla-go   # prebuilt binary, no Go toolchain needed
go install github.com/zzacong/mr-hulla/packages/mr-hulla-go@latest  # from source, installs as `mr-hulla-go`
```

Requires Node `>=20` for the npm wrapper, Go `>=1.25` for the `go install` path. Linux binaries are built against glibc — musl-based
distros (e.g. Alpine) are not supported.

## Develop

From the repo root:

```sh
pnpm install
pnpm --filter mr-hulla-go run build   # cross-compile all 5 platform bins
pnpm --filter mr-hulla-go run test    # go test + build + launcher smoke test
node ./packages/mr-hulla-go/bin/mr-hulla-go.mjs ada
```

Go source lives in `packages/mr-hulla-go` (`main.go`, `main_test.go`) and is
excluded from the published tarball; the per-platform binaries in
`packages/go-*/bin` are built artifacts (gitignored) produced by the
wrapper's `build` script.

## License

MIT. See [LICENSE](./LICENSE).
