import { createSlice } from '@reduxjs/toolkit';
import { fetchQuestions } from './HomeApi';

const questionsSlice = createSlice({
  name: 'questions',
  initialState: {
    questions: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.questions = action.payload;
        state.error = null;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// Export the questions reducer
export default questionsSlice.reducer;