/**
 * TODO: このファイルはすでに使われていないのであとで削除する。
 * createSlice を使った場合には Action や Reducer もまとめて作ってくれるのでこちらは不要になる。
 */
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setVisible } from 'features/sidebar/sidebar-actions';

export type SidebarState = {
  visible: boolean;
};

const initialState: SidebarState = { visible: true };

export const sidebarReducer = createReducer(initialState, {
  [setVisible.type]: (state, action: PayloadAction<number>) => ({
    ...state,
    count: action.payload,
  }),
});
