import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/Form.module.css';
import { addBook, bookPost } from '../features/book/Bookslice';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onAuthorChanged = (e) => setAuthor(e.target.value);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !author.trim()) return;
    const bookData = {
      item_id: uuidv4(),
      title,
      author,

    };
    dispatch(addBook(bookData));
    dispatch(bookPost(bookData));
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
