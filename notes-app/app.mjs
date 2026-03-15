import chalk from 'chalk';
import yargs from 'yargs';
import { getNotes, addNote, removeNote } from './notes.mjs';

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
    handler: (argv) => addNote(argv.title, argv.body)
  })
  .command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      }
    },
    handler: (argv) => removeNote(argv.title)
  })
  .command({
    command: 'read',
    describe: 'Read a note',
    handler: () => console.log('Reading note...')
  })
  .command({
    command: 'list',
    describe: 'List all notes',
    handler: () => getNotes()
  })
  .parse();


//console.log(argv);