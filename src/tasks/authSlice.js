import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser, logInUser, logOutUser, registerUser } from './authOperations';




const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};
const handleFulfilled =(state, {payload}) =>{
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

const handleFulfilledRefresh =(state, {payload}) =>{
  return {
    ...state,
    user: payload,
    isLoggedIn: true
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(registerUser.fulfilled, handleFulfilled)
    .addCase(logInUser.fulfilled, handleFulfilled)
    .addCase(logOutUser.fulfilled, handleFulfilledLogOut)
    .addCase(fetchCurrentUser.fulfilled, handleFulfilledRefresh)

  },
});
export const authReducer = authSlice.reducer;