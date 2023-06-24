import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { authSliceReducer } from '../components/auth/authSlice';

export const store = configureStore({

  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authSliceReducer,
  },
});