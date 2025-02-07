import { useState } from "react";
import Book from "./Book.jsx";
import "./BookCollectionManager.css";

function BookCollectionManager() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  function handleYearChange(event) {
    setYear(event.target.value);
  }

  function addBook() {
    if (title.trim() !== "" && author.trim() !== "") {
      setBooks((b) => [...b, { title, author, year }]);
      setTitle("");
      setAuthor("");
      setYear("");
    }
  }

  function deleteBook(index) {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  }

  return (
    <div className="collection-container">
      <h1 className="collection-title">Book Collection Manager</h1>
      <div className="book-form">
        <input
          className="book-input"
          type="text"
          placeholder="Enter book title..."
          value={title}
          onChange={handleTitleChange}
        />
        <input
          className="book-input"
          type="text"
          placeholder="Enter author name..."
          value={author}
          onChange={handleAuthorChange}
        />
        <input
          className="book-input"
          type="text"
          placeholder="Year of Publication"
          value={year}
          onChange={handleYearChange}
        />
        <button className="submit-button" onClick={addBook}>
          Add Book
        </button>
      </div>
      <ol className="books-list">
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