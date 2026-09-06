# mr-hulla

Minimal experimental package. `npx mr-hulla` prints `yo, from mr hulla!`.

This repo is a pnpm monorepo with three distributions:

- [`mr-hulla-core`](packages/core) — the library (`hello()` lives here).
- [`mr-hulla`](packages/cli) — the CLI. Depends on `mr-hulla-core` via `workspace:*`, so the two always build and ship from the same source.
- [`mr-hulla-go`](packages/mr-hulla-go) — the same greeting in Go. An npm wrapper installs the prebuilt binary for your platform (darwin/linux on arm64/x64, windows on x64) from five `mr-hulla-go-<os>-<arch>` platform packages.

## Use

```sh
npx mr-hulla          # yo, from mr hulla!
npx mr-hulla ada      # yo, from ada!
npx mr-hulla-go       # yo, from mr hulla (go)! (Go binary, no build step)
npx mr-hulla-go ada   # yo, from ada (go)!
```

## Install

```sh
npm i -g mr-hulla mr-hulla-go   # prebuilt npm distributions
go install github.com/zzacong/mr-hulla/packages/mr-hulla-go@latest  # Go from source, installs as `mr-hulla-go`
```

As a library (install `mr-hulla-core`, not `mr-hulla`):

```ts
import { hello } from "mr-hulla-core";

console.log(hello()); // yo, from mr hulla!
```

Requires Node `>=20`. The `go install` path needs Go `>=1.25`.

## Develop

```sh
pnpm install
pnpm -r run build
pnpm -r run test
pnpm -r run typecheck
pnpm -r run lint
node ./packages/cli/dist/cli.js
```

Scripts live per package (`packages/core`, `packages/cli`); the root
`package.json` just delegates with `pnpm -r run <script>`. The CLI resolves
`mr-hulla-core` to source during dev (via `tsconfig` paths / `vitest` alias)
and to the built package at runtime, so test/typecheck pass without a prior
build — but run `build` first if you want to exercise the real linkage, as
the `node ./packages/cli/dist/cli.js` smoke test above does.

## Release (maintainers)

1. Add a changeset: `pnpm changeset` (pick `patch` for experiments).
   `mr-hulla` and `mr-hulla-core` version independently — name whichever
   changed. The six `mr-hulla-go*` packages are `fixed` in
   `.changeset/config.json`, so a changeset naming just `mr-hulla-go`
   versions and releases all six together.
2. Push to `main`. CI opens/updates a **Version Packages** PR.
3. Merge the Version Packages PR. CI tags (`<name>@<version>` per package),
   creates the GitHub Release, and publishes to npm via trusted publishing
   (OIDC) with provenance. No `NPM_TOKEN` needed.

First-ever publish of a new package is manual from a maintainer laptop after
`npm login`:

```sh
pnpm --filter mr-hulla-core run build
pnpm --filter mr-hulla-core publish --access public
```

No `--provenance` here: provenance needs a CI OIDC identity and fails on a
laptop. It switches on automatically once CI publishes via trusted publishing.

Then configure that package's OWN npm trusted publisher
(`package → Settings → Trusted Publisher`: repo `zzacong/mr-hulla`, workflow
`release.yml`). Tags (`latest`/`beta`) are per-package.
