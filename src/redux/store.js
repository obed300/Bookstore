import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './book/Bookslice';
import categoriesReducer from './categories/Categories';

const store = configureStore({
  reducer: {
    book: bookReducer,
    categories: categoriesReducer,
  },
});

export default store;
