#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to run command: ${command}`, error);
    return false;
  }
  return true;
};

const appName = process.argv[2];
const gitCheckoutCommand = `git clone https://github.com/spect-ai/create-partical-app ${appName}`;
const installDependenciesCommand = `cd ${appName} && yarn`;

console.log(`Creating a new Partical app!! in ${appName}...`);
const checkoutOut = runCommand(gitCheckoutCommand);
if (!checkoutOut) process.exit(-1);

console.log(`Installing dependencies...`);
const installedDeps = runCommand(installDependenciesCommand);
if (!installedDeps) process.exit(-1);

console.log(`Congratulations! Your Partical app is ready!`);
console.log(`To start your app, run: cd ${appName} && yarn dev`);
