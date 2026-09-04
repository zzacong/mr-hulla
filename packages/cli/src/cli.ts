#!/usr/bin/env node
import { hello } from "mr-hulla-core";

const name = process.argv[2]?.trim() || undefined;

process.stdout.write(`${hello(name)}\n`);
