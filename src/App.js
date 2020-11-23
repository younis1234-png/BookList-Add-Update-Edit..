import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import logo from './logo.svg';
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [currentBookId, setCurrentBookId] = useState(null);
  const [books, setBooks] = useState([
    {
      bookTitle: "Book 1",
      bookAuthor: "James Brown",
      bookIsbn: "9999",
      bookId: uuidv4(),
    },
  ]);

  const isInputInvalid = () => {
    return title.trim() === "" || author.trim() === "" || isbn.trim() === "";
  };

  // fucntion to clear all our input
  const clearInput = () => {
    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  // remove book
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.bookId !== id));
  };

  const updateBook = () => {
    setBooks(
      books.map((book) =>
        book.bookId === currentBookId
          ? { ...books, bookTitle: title, bookAuthor: author, bookIsbn: isbn }
          : book
      )
    );
  };

  const addBook = () => {
    setBooks([
      ...books,
      {
        bookTitle: title,
        bookAuthor: author,
        bookIsbn: isbn,
        bookId: uuidv4(),
      },
    ]);
  };

  const editBook = (book) => {
    setTitle(book.bookTitle);
    setAuthor(book.bookAuthor);
    setIsbn(book.bookIsbn);

    // to edit we to our boo id
    setCurrentBookId(book.bookId);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    clearInput();

    // go back to null
    setCurrentBookId(null);

    if (isInputInvalid()) return;

    // if there is no current book id we want to add book, else we all the function upateboook()
    !currentBookId ? addBook() : updateBook();

    addBook();
  };

  // fucntion to cancel the book
  const cancelEdit = () => {
    clearInput();
    setCurrentBookId(null);
  };

  return (
    <div className="App">
      <div className="container">
        <Form
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          isbn={isbn}
          setIsbn={setIsbn}
          currentBookId={currentBookId}
          setCurrentBookId={setCurrentBookId}
          handelSubmit={handelSubmit}
          cancelEdit={cancelEdit}
        />
        <Table books={books} removeBook={removeBook} editBook={editBook} />
      </div>
    </div>
  );
}

export default App;
