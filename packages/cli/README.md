# mr-hulla

Minimal experimental package. `npx mr-hulla` prints `yo, from mr hulla!`.

Built on [`mr-hulla-core`](https://www.npmjs.com/package/mr-hulla-core). Source: [zzacong/mr-hulla](https://github.com/zzacong/mr-hulla).

## Use

```sh
npx mr-hulla          # yo, from mr hulla!
npx mr-hulla ada      # yo, from ada!
```

Want `hello()` as a library? Install `mr-hulla-core` instead — this package ships no library entry point.

Requires Node `>=20`.

## Develop

From the repo root:

```sh
pnpm install
pnpm --filter mr-hulla run build
node ./packages/cli/dist/cli.js ada
```

## License

MIT. See [LICENSE](./LICENSE).
