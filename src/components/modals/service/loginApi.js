import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('auth/login', async (credentials) => {
  try {
    const response = await axios.post('https://walrus-app-xqntt.ondigitalocean.app/api/login/', credentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
});
