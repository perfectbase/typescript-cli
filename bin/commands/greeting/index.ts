import { Command } from 'commander';

const folderName = __dirname.split('/').slice(-1)[0];

/**
 * This is an example command
 * that will take your name as an argument
 * and say hello to you in the console.
 */
export default new Command()
  .command(folderName)
  .description('Say hello to you!')
  .argument('<string>', 'Your name')
  .option('-s, --suffix <char>', 'Suffix greetings', ',')
  .action((name: string, options: { suffix: string }) => {
    console.log(`Hello, ${name}! ${options.suffix}`);
  });
