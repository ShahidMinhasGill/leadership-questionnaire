import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    expiry: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    loginStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.token = action.payload.token;
      state.expiry = action.payload.expiry;
      state.isLoading = false;
      state.error = null;
    },
    loginFail(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFail } = authSlice.actions;

export default authSlice.reducer;
