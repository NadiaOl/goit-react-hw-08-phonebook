import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  return {
    ...state,
    isLoading: true,
  };
};

const handleRejected = (state, {payload}) => {
  return {
    // ...state,
    isLoading: false,
    error: payload,
  };
};

const handleFulfilled = (state) => {
  return {
    isLoading: false, 
    error: null, 
  }
}

const handleFetchContactsSuccess = (state, {payload}) => {
  handleFulfilled()
  return{
    items: payload }};

const handleAddContactSuccess = (state, {payload}) => {
  handleFulfilled()
  return {
    items: [payload, ...state.items],
  };
};

const handleDeleteContactSuccess = (state, {payload}) => {
  handleFulfilled()
  return {
    items: state.items.filter(item => item.id !== payload.id),
  };
};


const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, handleFetchContactsSuccess)
      .addCase(addContact.fulfilled, handleAddContactSuccess)
      .addCase(deleteContact.fulfilled, handleDeleteContactSuccess)
}});

export const contactsReducer = contactsSlice.reducer;
