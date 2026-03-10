import chalk from 'chalk';
import yargs from 'yargs';

const argv = yargs(process.argv.slice(2))
  .version('26.0')
  .command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      },
      body: {
        describe: 'Note body',
        demandOption: true,
        type: 'string'
      }
    },
    handler: (argv) => console.log('Adding the note', argv.title, ' with body:', argv.body)
  })
  .command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => console.log('Removing note...')
  })
  .command({
    command: 'read',
    describe: 'Read a note',
    handler: () => console.log('Reading note...')
  })
  .command({
    command: 'list',
    describe: 'List all notes',
    handler: () => console.log('Listing all notes...')
  })
  .parse();


//console.log(argv);