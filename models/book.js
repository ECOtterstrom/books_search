const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const bookSchema = new Schema({
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   synopsis: String,
//   date: { type: Date, default: Date.now }
// });

const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: false },
  authors: [{type: Array, required: true}],
  description: {type: String, required: true},
  image: {type: String, trim: true},
  link: {type: String, trim: true},
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
