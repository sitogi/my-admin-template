import React, { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Container from './example';

const TodoList: FC = () => (
  <div>
    <DndProvider backend={HTML5Backend}>
      <Container />
    </DndProvider>
  </div>
);

export default TodoList;
