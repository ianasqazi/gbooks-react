import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import { DetailsBtn, SaveBtn, DeleteBtn } from "../components/Buttons";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

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

  // Save book
  function saveBook(data) {
    API.saveBook(data)
      .then(() =>
        loadBooks()
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
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={(e) => {setFormObject({...formObject, title: e.target.value})}}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                onChange={(e) => {setFormObject({...formObject, author: e.target.value})}}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                onChange={(e) => {setFormObject({...formObject, synopsis: e.target.value})}}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={() => {saveBook(formObject);}}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {books.length ? (
              <List>
                {books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => { deleteBook(book._id) }} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Books;
