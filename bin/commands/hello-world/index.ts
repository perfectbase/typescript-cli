import { Command } from 'commander';

const folderName = __dirname.split('/').slice(-1)[0];

export default new Command()
  .command(folderName)
  .description('Hello World!')
  .action(() => {
    console.log('Hello World!');
  });
