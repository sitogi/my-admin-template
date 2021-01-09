import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PageTitle = 'dashboard' | 'users' | 'amount' | 'todo';

export type SidebarState = {
  open: boolean;
  activePage: PageTitle;
};

const initialState: SidebarState = { open: true, activePage: 'dashboard' };

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => ({
      ...state,
      open: action.payload,
    }),
    setActivePage: (state, action: PayloadAction<PageTitle>) => ({
      ...state,
      activePage: action.payload,
    }),
  },
});
