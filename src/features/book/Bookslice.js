import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/neTvlShlUagV28v2Fadm/books';

const initialState = {
  books: [],
  status: 'idle',
};

export const bookPost = createAsyncThunk('books/addBookToAPI', async (newbook) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newbook),
  });
  const data = await response.json();
  return data;
});

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, thunkAPI) => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
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
      const response = await fetch(`${URL}/${id}`, { method: 'DELETE' });
      const data = await response.json();
      return data;
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
    builder.addCase(bookPost.fulfilled, (state, action) => {
      const states = state;
      states.status = 'success';
      states.books = [
        ...states.books,
        action.payload,
      ];
    });

    builder.addCase(fetchBooks.pending, (state) => {
      const states = state;
      states.isLoading = true;
    }).addCase(fetchBooks.fulfilled, (state, action) => {
      const states = state;
      states.isLoading = false;
      const responseObj = action.payload;

      const newBookArr = [];
      Object.entries(responseObj).forEach(([id, bookArray]) => {
        const bookObj = bookArray[0];
        bookObj.item_id = id;
        newBookArr.push(bookObj);
      });

      states.books = newBookArr;
    }).addCase(fetchBooks.rejected, (state) => {
      const states = state;
      states.isLoading = false;
    });
  },

});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
