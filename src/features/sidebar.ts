import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SidebarState = {
  visible: boolean;
};

const initialState: SidebarState = { visible: true };

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setVisible: (state, action: PayloadAction<boolean>) => ({
      ...state,
      visible: action.payload,
    }),
  },
});
