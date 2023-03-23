import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, removeBookFromAPI } from '../features/book/Bookslice';
import styles from '../styles/Book.module.css';

function Book({
  id, title, author, category,
}) {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeBook(id));
    dispatch(removeBookFromAPI(id));
  };

  return (
    <div className={styles.contain}>
      <div className={styles.bookDetails}>
        <span className={styles.bookCategory}>{category}</span>
        <span className={styles.bookTitle}>{title}</span>
        <span className={styles.bookAuthor}>{author}</span>
        <div className={styles.containButtons}>
          <button className={styles.smallButtons} type="button">Comments</button>
          <button className={`${styles.vertical} ${styles.smallButtons}`} type="button" onClick={handleRemoveClick}>
            Remove
          </button>
          <button className={`${styles.vertical} ${styles.smallButtons}`} type="button">Edit</button>
        </div>
      </div>
      <div className={styles.otherSide}>
        <div className={styles.progress}>
          <div className={styles.progressCircle} />
          <div className={styles.progressOverlay} />
          <div className={styles.progressValue} />
        </div>
        <p className={styles.percentage}>
          64%
          <br />
          <span className={styles.complete}>completed</span>
        </p>
        <div className={styles.chapter}>
          <p className={styles.current}>CURRENT CHAPTER</p>
          <p className={styles.myChapter}>chapter 17</p>
          <button type="button" className={styles.update}>UPDATE PROGRESS</button>
        </div>

      </div>

    </div>

  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
