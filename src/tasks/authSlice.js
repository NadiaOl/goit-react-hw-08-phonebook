import { createSlice } from '@reduxjs/toolkit';
import { logInUser, logOutUsser, registerUser } from './authOperations';




const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};
const handleFulfilled =(state, {payload}) =>{
  console.log('state', state)
  console.log('payload', payload)
  return {
    user: payload.user,
    token: payload.token,
    isLoggedIn: true
  }
}
const handleFulfilledLogOut =(state) =>{
  return {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logInUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOutUsser.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});
export const authReducer = authSlice.reducer;