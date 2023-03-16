import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: '',
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => ({
      ...state,
      status: `${state.status}Under construction`,
    }),
  },
});

export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;
