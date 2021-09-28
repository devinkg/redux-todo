import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';

//Configuring store
export const store = configureStore({
  reducer: {
    todos: todoReducer
  },
});
