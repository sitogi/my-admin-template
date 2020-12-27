import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterSlice } from 'features/counter';
import { sidebarSlice } from 'features/sidebar';

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  sidebar: sidebarSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
