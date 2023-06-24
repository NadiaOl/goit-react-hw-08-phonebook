import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};


export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      token.set(res.data.token);
      console.log(res.data);
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const logInUser = createAsyncThunk('auth/login', async () => {
  try {
    
  } catch (error) {
    
  }
});

export const logOutUsser = createAsyncThunk('auth/logout', async () => {
  try {
    
  } catch (error) {
    
  }
});

// export const fetchCurrentUser = createAsyncThunk();

