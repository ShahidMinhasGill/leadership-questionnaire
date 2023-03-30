import { createSlice } from '@reduxjs/toolkit';
import { fetchQuestions, fetchUser, fetchUserProgress, postResponse } from './HomeApi';

const questionsSlice = createSlice({
  name: 'questions',
   initialState: {
    questions: [],
    userProgress: [],
    data: null,
    status: null,
    error: null, 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.questions = action.payload;
        console.log('actionpayload',state);
      })
      .addCase(postResponse.fulfilled, (state, action) => {
        state.data = action.payload;
      })
   

      .addCase(fetchUserProgress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserProgress.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userProgress = action.payload;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        console.log('state.user',state.user);
      })
  },
});

// Export the questions reducer
export default questionsSlice.reducer;