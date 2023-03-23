import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/Form.module.css';
import { addBook, bookPost } from '../features/book/Bookslice';

function Form() {
  const { categories } = useSelector((state) => state.categories);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onAuthorChanged = (e) => setAuthor(e.target.value);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !author.trim()) return;
    const category = categories[Math.floor(Math.random() * categories.length)];
    const payload = {
      item_id: uuidv4(),
      title,
      author,
      category,

    };
    dispatch(addBook(payload));
    dispatch(bookPost(payload));
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
