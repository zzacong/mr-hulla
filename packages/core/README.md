# mr-hulla-core

Core library for [`mr-hulla`](https://github.com/zzacong/mr-hulla). `hello()` lives here.

## Install

```sh
npm install mr-hulla-core
```

Requires Node `>=20`.

## Use

```ts
import { hello } from "mr-hulla-core";

console.log(hello()); // yo, from mr hulla!
console.log(hello("ada")); // yo, from ada!
```

## Develop

From the repo root ([zzacong/mr-hulla](https://github.com/zzacong/mr-hulla)):

```sh
pnpm install
pnpm --filter mr-hulla-core run build
pnpm --filter mr-hulla-core run test
```

## License

MIT. See [LICENSE](./LICENSE).
