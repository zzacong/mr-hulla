#!/usr/bin/env node
import { hello } from "mr-hulla-core";

process.stdout.write(`${hello(process.argv[2])}\n`);
