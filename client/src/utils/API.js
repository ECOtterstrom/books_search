import axios from "axios";

export default {
  // Get book from google search 
  getSearch: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
},
  // Gets all books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  viewBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  //Saves a book to the database
  saveBook: function(book) {
    return axios.post("/api/books", book);
  }
};


