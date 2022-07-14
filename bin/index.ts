#!/usr/bin/env node
import 'source-map-support/register';
import { Command } from 'commander';
import commands from './commands';

const program = new Command();

program.name('cli').description('TypeScript CLI').version('0.0.0');

commands.forEach((cmd) => {
  program.addCommand(cmd);
});

program.parse();
