#!/usr/bin/env node

const appName = process.argv[2];
const gitCheckoutCommand = `git checkout -b ${appName}`;
