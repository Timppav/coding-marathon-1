import React from 'react';
import './Book.css';

function Book({ book, onDelete }) {
  return (
    <li className="book-item">
      <div className={'book-info'}>
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">Author: {book.author}</p>
        <p className="publication-year">Year: {book.year}</p>
      </div>
      <button className="delete-button" onClick={onDelete}>Delete</button>
    </li>
  );
}

export default Book;