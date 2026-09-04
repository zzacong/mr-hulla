---
"mr-hulla-core": minor
"mr-hulla": patch
---

Split the single package into a pnpm monorepo: `hello()` moves to the new `mr-hulla-core` library, and `mr-hulla` is now a CLI that depends on it via `workspace:*`. Library consumers should install `mr-hulla-core`.
