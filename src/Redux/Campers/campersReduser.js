import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from '../../Services/api.js';

const campers = {
  campers: [],
  favorites: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  itemsPerPage: 4,
};

const forPending = state => {
  state.isLoading = true;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: campers,
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, forPending)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.campers = action.payload;
      });
  },
});
export const { setFilter } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
