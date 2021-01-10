import React, { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Board from './Board';

const TodoList: FC = () => (
  <div>
    <DndProvider backend={HTML5Backend}>
      <Board />
    </DndProvider>
  </div>
);

export default TodoList;
