import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/book/Bookslice';

function Book({ title, author, id }) {
  const dispatch = useDispatch();
  return (
    <div className="bookDetails">
      <span className="bookTitle">{title}</span>
      <span className="bookAuthor">{author}</span>
      <button className="removeBook" type="button" onClick={() => { dispatch(removeBook(id)); }}>
        Remove
      </button>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
