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
    ...state,
    user: payload.user,
    token: payload.token,
    isLoggedIn: true
  }
}
const handleFulfilledLogOut =(state) =>{
  return {
    ...state,
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  
  extraReducers: (builder) => {
    builder
    .addCase(registerUser.fulfilled, handleFulfilled)
    .addCase(logInUser.fulfilled, handleFulfilled)
    .addCase(logOutUsser.fulfilled, handleFulfilledLogOut)
  },
});

console.log('initialState', initialState)

export const authSliceReducer = authSlice.reducer;