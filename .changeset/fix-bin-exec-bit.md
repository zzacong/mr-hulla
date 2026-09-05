---
"mr-hulla-go": patch
---

Declare the prebuilt binary in each platform package's `bin` field. Packagers normalize tarball modes to 644 for non-bin files, so installed binaries were not executable (`EACCES` on first run). Bin-field entries ship 755; the launcher also repairs a missing exec bit as a fallback.
