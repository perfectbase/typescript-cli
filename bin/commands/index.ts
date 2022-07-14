/* eslint-disable @typescript-eslint/no-var-requires */
import { Command } from 'commander';
import { readdirSync } from 'fs';

const commands: Command[] = [];

readdirSync(__dirname + '/').forEach(function (file) {
  // This will import all files inside the commands directory (except this one)
  if (!file.startsWith('index.')) commands.push(require('./' + file).default);
});

export default commands;
