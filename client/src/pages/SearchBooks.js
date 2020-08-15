import React, { useState, useEffect } from "react";
import ViewBtn from "../components/ViewBtn";
import SaveBtn from "../components/SaveBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import SearchCard from "../components/SearchCard";
// import SearchResults from "../components/SearchResults";

function SearchBooks() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState("")

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getSearch(search)
      .then(res =>
        {console.log(res.data.items);
        setBooks(res.data.items)}
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  // Saves a book from the Google database to the React Reading List database with a given id
  function saveBook(id) {
    API.saveBook(id)
    .then(res => loadBooks())
    .catch(err => console.log(err));
  }

  function viewBook(id) {
    API.getBook(id)
    .then(res => loadBooks())
    .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const value = event.target.value;
    setSearch(value)
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    loadBooks();
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Google Book Search</h1>
            <p>Search for and Save Books of Interest</p>
          </Jumbotron>
          <SearchCard handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
          <p />
          {/* <SearchResults  /> */}
          <form>
            {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                    </Link>
                    <strong>
                      <p>
                        {book.volumeInfo.title}
                        <SaveBtn onClick={() => saveBook(book._id)} />
                        <ViewBtn onClick={() => viewBook(book._id)} />
                      </p>
                      <p>
                        {book.volumeInfo.subtitle}
                      </p>
                      <p>Written by {book.volumeInfo.authors.join(",")}</p>
                    </strong>
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </form>
        </Col>
      </Row>
    </Container>
  );
}


export default SearchBooks;
