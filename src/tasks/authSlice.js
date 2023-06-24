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
  extraReducers: (builder) => {
    builder
    .addCase(registerUser.fulfilled, handleFulfilled)
    .addCase(logInUser.fulfilled, handleFulfilled)
    .addCase(logOutUsser.fulfilled, handleFulfilledLogOut)

  },
});
export const authReducer = authSlice.reducer;