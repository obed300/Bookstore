import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../features/categories/Categories';

function Category() {
  const { status } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{status}</p>
      <button onClick={() => dispatch(checkStatus())} type="button">Check status</button>
    </div>
  );
}

export default Category;
