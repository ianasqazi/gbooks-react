import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: async function(bookData) {
    let exists = await axios.get("/api/books/" + bookData.id);
    //console.log(bookData);
    //console.log(exists);
    if (!exists.data) {
      await axios.post("/api/books", bookData)
      return { message: "Book saved." };
    } else {
      return { message: "Book already saved." };
    }
  },
  // Gets all books
  searchBooks: async function(query) {
    let data = (await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`)).data.items;
    //console.log(data);
    let books = [];
    for (let book of data) {
      books.push({
        id: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://books.google.ca/googlebooks/images/no_cover_thumb.gif",
        link: book.volumeInfo.infoLink
      });
    }
    //console.log(books);
    return books;
  },
};
