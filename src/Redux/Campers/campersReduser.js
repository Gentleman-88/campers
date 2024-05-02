import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from '../../Services/api.js';

const campers = {
  campers: [],
  favorites: [],
  isLoading: false,
  error: null,
  pagination: { page: 1, limit: 4 },
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: campers,
  reducers: {
    setPagination(state, action) {
      state.pagination = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.campers = action.payload;
      });
  },
});

export const { setFilter, setPagination } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
