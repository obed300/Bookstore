import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { fetchBooks } from '../features/book/Bookslice';
import styles from '../styles/Display.module.css';

function Displaybooks() {
  const { books } = useSelector((state) => state.book);
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li className={styles.list} key={book.item_id}>
            <Book
              title={book.title}
              author={book.author}
              id={book.item_id}
              category={categories[Math.floor(Math.random() * categories.length)]}
              titleClassName={styles.title} /* apply styles to title element */
              authorClassName={styles.author} /* apply styles to author element */
              categoryClassName={styles.category}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Displaybooks;
