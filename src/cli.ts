#!/usr/bin/env node
import { hello } from "./index.js";

process.stdout.write(`${hello(process.argv[2])}\n`);
