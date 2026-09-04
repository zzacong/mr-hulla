# Changelog

## 0.3.1

### Patch Changes

- c3168ae: Ship README, LICENSE, and CHANGELOG in the published packages.
- Updated dependencies [c3168ae]
  - mr-hulla-core@0.3.1

## 0.3.0

### Patch Changes

- ddf106e: Split the single package into a pnpm monorepo: `hello()` moves to the new `mr-hulla-core` library, and `mr-hulla` is now a CLI that depends on it via `workspace:*`. Library consumers should install `mr-hulla-core`.
- Updated dependencies [ddf106e]
  - mr-hulla-core@0.3.0

## 0.2.1

### Patch Changes

- cec8a00: Document the yo greeting in the README
- c9d6b32: Greet with yo instead of hey
- 9effbcc: Greet with hey instead of hello

## 0.2.1-beta.1

### Patch Changes

- c9d6b32: Greet with yo instead of hey

## 0.2.1-beta.0

### Patch Changes

- 9effbcc: Greet with hey instead of hello

## 0.2.0

### Minor Changes

- 9aa8669: Add optional name argument to `hello()`; `mr-hulla <name>` greets that name

### Patch Changes

- 68e46d4: Add an exclamation mark to the greeting

## 0.1.1

### Patch Changes

- 4320317: even better now

All notable changes to `mr-hulla` are documented here via [Changesets](https://github.com/changesets/changesets).

## 0.1.0 — Unreleased

Initial experimental release.
