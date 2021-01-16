import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CardList {
  id: string;
  order: string[];
}

export interface Card {
  id: string;
  text: string;
}

export type TodoListState = {
  cards: Card[];
  order: string[];
};

const initialState: TodoListState = { cards: [], order: [] };

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<Card[]>) => ({
      ...state,
      cards: action.payload,
    }),
    setOrder: (state, action: PayloadAction<string[]>) => ({
      ...state,
      order: action.payload,
    }),
  },
});
