import { createSlice } from '@reduxjs/toolkit';
import { fetchQuestions, fetchUser, fetchUserProgress, postResponse } from './HomeApi';

const questionsSlice = createSlice({
  name: 'questions',
   initialState: {
    questions: [],
    data: null,
    status: null,
    error: null, 
    userProgress: null,
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
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.data = action.payload;
      })

      .addCase(fetchUserProgress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserProgress.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userProgress = action.payload;
      })
      .addCase(fetchUserProgress.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Export the questions reducer
export default questionsSlice.reducer;