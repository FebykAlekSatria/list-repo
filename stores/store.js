import { configureStore } from '@reduxjs/toolkit';
import data from '../slices/dataSlice';
import user from '../slices/userSlice';

export const store = configureStore({
  reducer: {
    data: data,
    user:user
  }
});