import React from 'react';
import './Book.css';

function Book({ book, onDelete }) {
  return (
    <li className="book-item">
      {book.title} by {book.author}
      <button className={'delete-button'} onClick={onDelete}>Delete</button>
    </li>
  );
}

export default Book;