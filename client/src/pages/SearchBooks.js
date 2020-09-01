import React, { useState, useEffect } from "react";
import ViewBtn from "../components/ViewBtn";
import SaveBtn from "../components/SaveBtn";
import Jumbotron from "../components/Jumbotron";
// import API, { bookService } from "../utils/API";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
//import { Input, TextArea, FormBtn } from "../components/Form";
import SearchCard from "../components/SearchCard";
import Button from 'react-bootstrap/Button';

function SearchBooks(props) {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState("")
  const [book, setBook] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getSearch(search)
      .then(res => {
        console.log(res.data.items);
        setBooks(res.data.items)
      }
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
  const handleSaveClick = (id) => {
    //event.preventDefault();
    let savedBooks = books.filter(book => book.id === id)
    console.log(id)
    savedBooks = savedBooks[0];
    API.saveBook({
      title: savedBooks.volumeInfo.title,
      subtitle: savedBooks.volumeInfo.subtitle,
      authors: savedBooks.volumeInfo.authors,
      description: savedBooks.volumeInfo.description,
      image: savedBooks.volumeInfo.imageLinks.smallThumbnail,
      link: savedBooks.volumeInfo.previewLink,
      date: savedBooks.volumeInfo.publishedDate
    })
    // API.saveBook(savedBooks)
      .then(setBooks({ message: alert("Your book is saved") }))
      .catch(err => console.log(err))
      console.log(savedBooks)
  }

  const handleViewClick = (event) => {
    const value = event.target.value
    API.viewBook(value)
    // console.log(value)
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
                  <ListItem key={book.id}>
                    <Link to={"/api/books/" + book.id}>
                    </Link>
                    <strong>
                      <p>
                        {book.volumeInfo.title}
                        <SaveBtn onClick={() => handleSaveClick(book.id)} />
                        <ViewBtn href={book.volumeInfo.link} className="viewBtn" />
                        {/* <ViewBtn onClick={() => handleViewClick(book.link)} /> */}
                        {/* <ViewBtn /> */}

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
