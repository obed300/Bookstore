import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

function Displaybooks() {
  const { books } = useSelector((state) => state.book);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <Book
              title={book.title}
              author={book.author}
              id={book.item_id}
            />

          </li>
        ))}
      </ul>
    </div>
  );
}

export default Displaybooks;
