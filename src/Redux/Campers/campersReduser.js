import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from '../../Services/api.js';

const campers = {
  campers: [],
  isLoading: false,
  error: null,
  pagination: { page: 1, limit: 4 },
  location: '',
  equipmentFilters: [],
  vehicleType: '',
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: campers,
  reducers: {
    setPagination(state, action) {
      state.pagination = action.payload;
    },
    setLocation(state, action) {
      state.location = action.payload;
    },
    setVehicleType(state, action) {
      state.vehicleType = action.payload;
    },
    addFilter(state, action) {
      state.equipmentFilters.push(action.payload);
    },
    removeFilter(state, action) {
      state.equipmentFilters = state.equipmentFilters.filter(
        filter => filter !== action.payload
      );
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

export const {
  setFilter,
  setPagination,
  setLocation,
  setVehicleType,
  addFilter,
  removeFilter,
} = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
