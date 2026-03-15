import filesystem from 'fs';

export const getNotes = () => {
  return loadNotes();
};

export const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicatedNotes = notes.filter((note) => note.title === title);
  if (duplicatedNotes.length === 0) {
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

export const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(`Note with title ${title} removed successfully!`);
  } else {
    console.log(`No note with title ${title} was found!`);
  }
}

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
}