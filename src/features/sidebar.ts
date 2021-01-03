import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PageTitle = 'Dashboard' | 'Users' | 'Amount';

export type SidebarState = {
  visible: boolean;
  activePage: PageTitle;
};

const initialState: SidebarState = { visible: true, activePage: 'Dashboard' };

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setVisible: (state, action: PayloadAction<boolean>) => ({
      ...state,
      visible: action.payload,
    }),
    setActivePage: (state, action: PayloadAction<PageTitle>) => ({
      ...state,
      activePage: action.payload,
    }),
  },
});
