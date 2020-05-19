const fs = require("fs");
const chalk = require("chalk");



const loadNotes = () => {
  try {
    const dataBufer = fs.readFileSync("notes.json");
    const dataJSON = dataBufer.toString();
    const data = JSON.parse(dataJSON);
    return data;
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => {
    return note.title === title;
  });

  debugger

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.bold("New note added successfully"));
  } else {
    console.log(chalk.red("Note with similar title already exists"));
  }
};

const removeNote = (title,body) => {
  const notes = loadNotes();
  const getNote = notes.filter((note) => {
    return note.title === title;
  });
  if (getNote.length !== 0) {
    let getNoteIndex = notes.indexOf({title:title,body:body});
    notes.splice(getNoteIndex, 1)
    saveNotes(notes);
    console.log(chalk.green.bold('this note has been successfully deleted'));
  } else {
    console.log(chalk.red('this note does not exist'));
  }
};

const listNotes = () => {
  const notes = loadNotes()
  notes.forEach(note => {
    console.log(note.title)
  });
}

const readNote = (title) => {
  const notes = loadNotes()
  const read = notes.find((note) => {
    return note.title === title;
  });
  console.log(read);
}

module.exports = {
  listNotes: listNotes,
  addNote: addNote,
  readNote: readNote,
  removeNote: removeNote,
};
