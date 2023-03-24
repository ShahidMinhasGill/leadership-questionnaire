import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import apiInstance from '../../../config/AxiosInstance'

export const register =  createAsyncThunk('auth/register', async (userData) => {
    console.log('userData',userData);
    try {
        const response = await axios.post('https://walrus-app-xqntt.ondigitalocean.app/api/register/', userData);
        localStorage.setItem('token', response.data.token);
        return response.data;
      } catch (error) {
        throw Error(error.response.data);
      }
  }
)
