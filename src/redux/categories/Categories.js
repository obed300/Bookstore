import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.status;
    },
  },
});

export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;
