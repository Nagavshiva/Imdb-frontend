import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser } from '../actions/userActions';

// Retrieve user from localStorage if it exists
const storedUser = JSON.parse(localStorage.getItem('currentUser'));

const userSlice = createSlice({
  name: 'users',
  initialState: {
    currentUser: storedUser || null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.currentUser = null;
      localStorage.removeItem("currentUser");

  }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUser = action.payload;
        // Save user to localStorage on successful registration
        localStorage.setItem('currentUser', JSON.stringify(action.payload));
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUser = action.payload;
        // Save user to localStorage on successful login
        localStorage.setItem('currentUser', JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

      

  },
});
export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
