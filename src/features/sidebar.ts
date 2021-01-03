import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PageTitle = 'Dashboard' | 'Users' | 'Amount';

export type SidebarState = {
  open: boolean;
  activePage: PageTitle;
};

const initialState: SidebarState = { open: true, activePage: 'Dashboard' };

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
