import React, { useState, useEffect } from "react";
import ViewBtn from "../components/ViewBtn";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import SavedCard from "../components/SavedCard";
import SearchCard from "../components/SearchCard";

function SaveBooks() {
  const [books, setBooks] = useState([])
  const [book, setBook] = useState({})

  // Loads all books and sets them to books
  function loadBooks() {
    API.getSearch(search)
      .then(res =>
        {console.log(res.data.items);
        setBooks(res.data.items)}
      )
      .catch(err => console.log(err));
  };

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  //const {id} = useParams()
  useEffect(() => {
    API.getBook(id)
      .then(res => setBooks(res.data.items))
      .catch(err => console.log(err));
  }, [])

   // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  function viewBook(id) {
    API.getBook(id)
    .then(res => loadBooks())
    .catch(err => console.log(err));
  }

  return (
    <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>Google Book Search</h1>
          <p>Search for and Save Books of Interest</p>
        </Jumbotron>
        <SavedCard />
        <p />
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
                      <ViewBtn onClick={() => viewBook(book._id)} />
                      <DeleteBtn onClick={() => deleteBook(book._id)} />
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


export default SaveBooks;
