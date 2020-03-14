import React, { useEffect, useState } from "react";
import { DetailsBtn, DeleteBtn } from "../components/Buttons";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

function Saved() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res =>
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Delete book
  function deleteBook(id) {
    API.deleteBook(id)
      .then(() =>
        loadBooks()
      )
      .catch(err => console.log(err));
  };


  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 style={{ marginBottom: "1em", color:"#0F9D58" }}>Saved Books</h1>
          {books.length ? (
            <List>
              {books.map(book => {
                return (
                  <ListItem key={book._id}>
                    <Row>
                      <Col size="md-3">
                        <p><img src={book.image} alt={book.title} style={{maxWidth: "100%", height: "auto"}} /></p>
                        <p>
                          <DetailsBtn onClick={() => { window.open(book.link, "_blank") }} />
                          <DeleteBtn onClick={() => { deleteBook(book.id) }} />
                        </p>
                      </Col>
                      <Col>
                        <p><strong>{book.title}</strong>{book.authors ? " by " + book.authors : ""}</p>
                        <p>{book.description}</p>
                      </Col>
                    </Row>
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <h3 style={{ marginBottom: "1em", color:"#DB4437" }}>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}


export default Saved;
