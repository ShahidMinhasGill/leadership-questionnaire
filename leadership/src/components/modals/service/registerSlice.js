import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerStart(state) {
      state.isLoading = true
      state.error = null
    },
    registerSuccess(state, action) {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoading = false
      state.error = null
    },
    registerFailure(state, action) {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export const { registerStart, registerSuccess, registerFailure } = authSlice.actions

export default authSlice.reducer
