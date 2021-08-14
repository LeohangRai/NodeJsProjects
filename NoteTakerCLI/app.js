const { string } = require('yargs')
const yargs = require('yargs')
const notes = require('./noteTakingModule.js')


//Command to add a note
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Title of the note',
            demand: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note',
            demand: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})


//Command to remove a note
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of the note',
            demand: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        notes.removeNote(argv.title);
    }
})


    //Command to list the notes
    .command({
        command: 'list',
        describe: 'List the notes',
        handler: function () {
            notes.listNotes();
        }
    })


    //Command to read notes
    .command({
        command: 'read',
        describe: 'Read a note',
        builder: {
            title: {
                describe: 'Title of the note to read',
                demand: true,
                type: 'string'
            }
        },
        handler: function (argv) {
            notes.readNote(argv.title)
        }
    })
yargs.parse()