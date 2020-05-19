const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");
const fs = require("fs");

//add remove read list

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// remove add command
yargs.command({
  command: "remove",
  describe: "to remove new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title, argv.body);
  },
});

// create list command
yargs.command({
  command: "list",
  describe: "for listing all note",
  handler: function (argv) {
    console.log(notes.listNotes());
  },
});

// remove read command
yargs.command({
  command: "read",
  describe: "to read a note",
  handler: function (argv) {
    notes.readNote(argv.title)
  },
});

// console.log(yargs.argv);
// same as below

yargs.parse();
//nodemon

// console.log(process.argv);

// let myNoteData = notes();

// console.log(chalk.blue.inverse.bold(myNoteData));

// console.log(process.argv[2])
