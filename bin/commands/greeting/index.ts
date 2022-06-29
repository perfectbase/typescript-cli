import { Command } from 'commander';

const folderName = __dirname.split('/').slice(-1)[0];

export default new Command()
  .command(folderName)
  .description('Say hello to you!')
  .argument('<string>', 'Your name')
  .option('-s, --suffix <char>', 'Suffix greetings', ',')
  .action((name, options) => {
    console.log(`Hello, ${name}! ${options.suffix}`);
  });
