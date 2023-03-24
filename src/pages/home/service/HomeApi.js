import {createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an async thunk to fetch the questions
export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async () => {
    const response = await axios.get('https://walrus-app-xqntt.ondigitalocean.app/question_api/');
    console.log('response',response);
    return response.data;
  }
);