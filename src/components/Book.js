import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, removeBookFromAPI } from '../features/book/Bookslice';

function Book({
  id, title, author, category,
}) {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeBook(id));
    dispatch(removeBookFromAPI(id));
  };

  return (
    <div className="bookDetails">
      <span className="bookCategory">{category}</span>
      <span className="bookTitle">{title}</span>
      <span className="bookAuthor">{author}</span>
      <button className="removeBook" type="button" onClick={handleRemoveClick}>
        Remove
      </button>
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
