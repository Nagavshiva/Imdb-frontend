// actions/userActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../services/userService';

// Define asynchronous thunk for user registration
export const registerUser = createAsyncThunk('users/registerUser', async (userData) => {
  console.log(userData)
    const response = await userService.register(userData);
  return response.data;
});

// Define asynchronous thunk for user login
export const loginUser = createAsyncThunk('users/loginUser', async (userData) => {
  const response = await userService.login(userData);
  return response.data;
});




