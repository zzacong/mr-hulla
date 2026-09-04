# mr-hulla-core

## 0.3.1

### Patch Changes

- c3168ae: Ship README, LICENSE, and CHANGELOG in the published packages.

## 0.3.0

### Minor Changes

- ddf106e: Split the single package into a pnpm monorepo: `hello()` moves to the new `mr-hulla-core` library, and `mr-hulla` is now a CLI that depends on it via `workspace:*`. Library consumers should install `mr-hulla-core`.
