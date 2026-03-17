import filesystem from 'fs';

export const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicatedNote = notes.find((note) => note.title === title);
  if (!duplicatedNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log('New note added successfully!');
  } else {
    console.log(`Note with title ${title} already exists!`);
  }
};

export const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => title === note.title);

  if (note) {
    console.log(`Title: ${note.title}`);
    console.log(note.body);
  } else {
    console.log(`Note with title ${title} not found. Use list to see all notes`);
  }
};

export const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(`Note with title ${title} removed successfully!`);
  } else {
    console.log(`No note with title ${title} was found!`);
  }
};

export const listNotes = () => {
  const notes = loadNotes();
  if (notes.length > 0) {
    console.log(`Stored Notes:`);
    notes.forEach((note) => console.log(note.title));
    console.log(`-----------------------------------`);
  } else {
    console.log(`No notes found`);
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = filesystem.readFileSync('notes.db');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  };
};

const saveNotes = (nottes) => {
  const dataJSON = JSON.stringify(nottes);
  filesystem.writeFileSync('notes.db', dataJSON);
};

