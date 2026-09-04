# mr-hulla

Experimental npm package for learning mature open-source setup. Ships both a runnable command and an importable library with the same greeting.

## Language

**Package**: The published npm tarball named `mr-hulla`.
_Avoid_: repo, project

**CLI command**: The `mr-hulla` executable run via `npx mr-hulla`, printing the greeting to stdout.
_Avoid_: binary, script

**Library entry**: The importable module (`import { hello } from 'mr-hulla'`) exposing the same greeting programmatically.
_Avoid_: API, SDK

**Release**: A versioned, tagged, changelogged publication to the npm registry plus a GitHub Release.
_Avoid_: publish (the single `npm publish` step inside a release), deploy
