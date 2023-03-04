import React from 'react';
import styles from '../styles/Form.module.css';

function Form() {
  return (
    <>
      <h3 className={styles.title}>ADD NEW BOOK</h3>
      <form className={styles.form}>
        <input className={styles.titleInput} type="text" placeholder="Book title" />
        <input className={styles.authorInput} type="text" placeholder="Author" />
        <button type="button" className={styles.add}>ADD BOOK</button>
      </form>
    </>
  );
}

export default Form;
