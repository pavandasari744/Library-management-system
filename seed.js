// const Book = require('./models/book.js');
const faker = require("faker");
const fs = require("fs/promises");
const category = [
  "Science",
  "Biology",
  "Physics",
  "Chemistry",
  "Novel",
  "Travel",
  "Cooking",
  "Philosophy",
  "Mathematics",
  "Ethics",
  "Technology",
];

const author = [];
// for (let i = 0; i < 100; i++) {
//   author.push(faker.name.findName());
// }

(async function seed(limit) {
  const books = [];

  for (let i = 0; i < 11; i++) {
    author.push(faker.name.findName());
  }
  for (let i = 0; i < limit; i++) {
    let index1 = Math.floor(Math.random() * Math.floor(11));
    let index2 = Math.floor(Math.random() * Math.floor(11));
    try {
      books.push({
        title: faker.lorem.words(),
        ISBN: faker.random.uuid(),
        stock: 10,
        author: author[index2],
        description: faker.lorem.paragraphs(2),
        category: category[index1],
      });
      //   const book = new Book({
      //     title: faker.lorem.words(),
      //     ISBN: faker.random.uuid(),
      //     stock: 10,
      //     author: author[index2],
      //     description: faker.lorem.paragraphs(3),
      //     category: category[index1],
      //   });
      //   await book.save();
    } catch (err) {
      console.log("Error at creating books");
    }
  }

  await fs.writeFile("books.js", JSON.stringify(books));
})(100);

// module.exports = seed;
