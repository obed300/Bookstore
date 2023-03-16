import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import styles from '../styles/Form.module.css';
import { addBook } from '../redux/book/Bookslice';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onAuthorChanged = (e) => setAuthor(e.target.value);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && author) {
      dispatch(
        addBook({
          item_id: nanoid(),
          title,
          author,
        }),
      );
    }
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <h3 className={styles.title}>ADD NEW BOOK</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.titleInput}
          type="text"
          placeholder="Book title"
          id="title"
          value={title}
          onChange={onTitleChanged}
        />
        <input
          className={styles.authorInput}
          type="text"
          placeholder="Author"
          id="author"
          value={author}
          onChange={onAuthorChanged}
        />
        <button type="submit" className={styles.add}>ADD BOOK</button>
      </form>
    </>
  );
}

export default Form;
