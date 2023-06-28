import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const userToken = {
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
      const response = await axios.post('/users/signup', credentials);
      userToken.set(response.data.token);
      toast.success('Congratulations, you have registered! Please, enter your email and password!')
      return response.data;
    } catch (error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInUser = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', credentials);
    userToken.set(response.data.token);
    toast.success('Welcome to Contact Book!')
    return response.data;
  } catch (error) {
    toast.error('Wrong password or email. Please try again!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    userToken.unset()    
  } catch (error) {
    toast.error(`${error.message}`);
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }
  userToken.set(persistedToken);
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    toast.error(`${error.message}`);
    return thunkAPI.rejectWithValue(error.message);
  }
});

