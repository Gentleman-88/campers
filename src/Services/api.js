import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://66323d0dc51e14d69563cf9d.mockapi.io/advert';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
