/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/neTvlShlUagV28v2Fadm';

const initialState = {
  books: [],
};

export const bookPost = createAsyncThunk(
  'post/bookPost',
  async (bookData, thunkAPI) => {
    try {
      const response = await axios.post(`${URL}/books`, bookData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data.message || 'Something went wrong. Please check later!',
      );
    }
  },
);

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, thunkAPI) => {
  try {
    const response = await axios(`${URL}/books`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error?.data.message || 'Something went wrong. Please check later!',
    );
  }
});

export const removeBookFromAPI = createAsyncThunk(
  'books/deleteBook',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${URL}/books/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data.message || 'Something went wrong. Please check later!',
      );
    }
  },
);

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      // const bookData = actions.payload;
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      return {
        ...state,
        books: state.books.filter((book) => book.item_id !== bookId),
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(bookPost.pending, (state) => {
      state.isLoading = true;
    }).addCase(bookPost.fulfilled, (state) => {
      state.isLoading = false;
    }).addCase(bookPost.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    }).addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      const responseObj = action.payload;

      const newBookArr = [];
      // eslint-disable-next-line no-restricted-syntax, guard-for-in
      for (const id in responseObj) {
        const bookObj = responseObj[id][0];
        bookObj.item_id = id;
        newBookArr.push(bookObj);
      }
      state.books = newBookArr;
    }).addCase(fetchBooks.rejected, (state) => {
      state.isLoading = false;
    });
  },

});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
