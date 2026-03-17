const fileSystem = require('fs');

// const book = {
//     title: 'The way of kings',
//     author: 'Brandon Sanderson'
// };

// const bookJson = JSON.stringify(book);
// fileSystem.writeFileSync('book.json', bookJson);

const dataBuffer = fileSystem.readFileSync('book.json');

const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);

data.name = 'Juca';
data.age = 26;

fileSystem.writeFileSync('book.json', JSON.stringify(data));