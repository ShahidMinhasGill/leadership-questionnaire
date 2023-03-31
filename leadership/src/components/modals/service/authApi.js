import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchUser } from '../../../pages/home/service/HomeApi';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData) => {
    try {
        const response = await axios.post('https://walrus-app-xqntt.ondigitalocean.app/api/register/', userData);
        const { user, token } = response.data;
      sessionStorage.setItem('user', JSON.stringify(user));
      sessionStorage.setItem('token', token);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);
export const login = createAsyncThunk(

  'login/login',
  async (userData,{dispatch}) => {
    const response = await axios.post('https://walrus-app-xqntt.ondigitalocean.app/api/login/', userData);
    const {  token } = response.data;
    // sessionStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('token', token);
    dispatch(fetchUser())
    return response.data;
  }
);

