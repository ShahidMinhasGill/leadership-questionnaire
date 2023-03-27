import {createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an async thunk to fetch the questions
export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async () => {
    const response = await axios.get('https://walrus-app-xqntt.ondigitalocean.app/question_api/');
    return response.data;
  }
);
// fetch current user
export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async () => {
    // const token = localStorage.getItem('token');
    // const response = await axios.get('https://walrus-app-xqntt.ondigitalocean.app/api/auth/user', {
    //   headers: { Authorization: `token ${token}` },
    // });
    // return response.data;
  }
);
export const postResponse = createAsyncThunk(
  'response/postResponse',
  async (data) => {
    // console.log('response1234',data);
    // const response = await axios.post('https://walrus-app-xqntt.ondigitalocean.app/response_api/', data);
    // return response.data;
  }
);

export const fetchUserProgress = createAsyncThunk(
  "userProgress/fetchUserProgress",
  async (id) => {
    const token = localStorage.getItem('token');
    // console.log('tokentoken',id);
    // try {
    //   const response = await axios.get(`https://walrus-app-xqntt.ondigitalocean.app/user_progress_api/${id}/`, {
    //     headers: { Authorization: `token ${token}` },
    //   });
    //   console.log('response.data',response.data);
    // } catch (error) {
    //   return error.response.data
    // }
  }
);