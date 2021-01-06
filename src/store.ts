import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { sidebarSlice } from 'features/sidebar';

const rootReducer = combineReducers({
  sidebar: sidebarSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
