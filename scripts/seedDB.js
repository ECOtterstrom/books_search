const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/booksearch"
);

const bookSeed = [
  {
    authors: ["J. K. Rowling"],
    description: "Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School for Witchcraft and Wizardry.",
    image: "http://books.google.com/books/content?id=5MQFrgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=5MQFrgEACAAJ&dq=Harry+Potter+and+the+Sorcerer%27s+Stone&hl=&source=gbs_api",
    publishedDate: "2014-12",
    subtitle: "",
    title: "Harry Potter and the Sorcerer's Stone"
  },
  {

    authors: ["Laura Ingalls Wilder"],
    description: "Little House in the Big Woods is an autobiographical children's novel written by Laura Ingalls Wilder and published by Harper in 1932 (reviewed in June). It was Wilder's first book published and it inaugurated her Little House series. It is based on memories of her early childhood in the Big Woods near Pepin, Wisconsin, in the early 1870s.",
    image: "http://books.google.com/books/content?id=1-_eDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=1-_eDwAAQBAJ&dq=Little+House+in+the+Big+Woods&hl=&source=gbs_api",
    publishedDate: "2020-04-20",
    subtitle: "",
    title: "Little House in the Big Woods"
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
