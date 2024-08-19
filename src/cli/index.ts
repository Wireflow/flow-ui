import { Command } from 'commander';
import { init } from './commands/init';

const program = new Command();

program
  .command('init')
  .description('Initialize Flow UI in your project')
  .action(init);

program.parse(process.argv);
