# mr-hulla

Minimal experimental package. `npx mr-hulla` prints `yo, from mr hulla!`.

## Use

```sh
npx mr-hulla          # yo, from mr hulla!
npx mr-hulla ada      # yo, from ada!
```

As a library:

```ts
import { hello } from "mr-hulla";

console.log(hello()); // yo, from mr hulla!
```

Requires Node `>=20`.

## Develop

```sh
pnpm install
pnpm test
pnpm run typecheck
pnpm run lint
pnpm run build
node ./dist/cli.js
```

## Release (maintainers)

1. Add a changeset: `pnpm changeset` (pick `patch` for experiments).
2. Push to `main`. CI opens/updates a **Version Packages** PR.
3. Merge the Version Packages PR. CI tags, creates the GitHub Release, and publishes to npm via trusted publishing (OIDC) with provenance. No `NPM_TOKEN` needed.

First-ever publish is manual from a maintainer laptop after `npm login`:

```sh
pnpm run build
pnpm publish --access public
```

No `--provenance` here: provenance needs a CI OIDC identity and fails on a
laptop. It switches on automatically once CI publishes via trusted publishing.

Then configure npm trusted publisher (`package → Settings → Trusted Publisher`: repo `zzacong/mr-hulla`, workflow `release.yml`).
