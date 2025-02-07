import React, { useState } from "react";
import Book from "./Book";
import "./BookCollectionManager.css";

function BookCollectionManager() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  function addBook() {
    if (title.trim() !== "" && author.trim() !== "") {
      setBooks((b) => [...b, { title, author }]);
      setTitle("");
      setAuthor("");
    }
  }

  function deleteBook(index) {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  }

  return (
    <div className="book-collection">
      <h1>Book Collection Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Enter book title..."
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Enter author name..."
          value={author}
          onChange={handleAuthorChange}
        />
        <button className={'add-button'} onClick={addBook}>Add Book</button>
      </div>
      <ol>
        {books.map((book, index) => (
          <Book
            key={index}
            book={book}
            onDelete={() => deleteBook(index)}
          />
        ))}
      </ol>
    </div>
  );
}

export default BookCollectionManager;