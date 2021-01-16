import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { sidebarSlice } from 'features/sidebar';
import { todoListSlice } from 'features/todoList';

const rootReducer = combineReducers({
  sidebar: sidebarSlice.reducer,
  todoList: todoListSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
