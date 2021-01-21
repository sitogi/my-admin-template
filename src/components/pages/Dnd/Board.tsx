import React, { FC, useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import Draggable from './Draggable';
import Droppable from './Droppable';

const Board: FC = () => {
  const containers = ['A', 'B', 'C'];
  const [parent, setParent] = useState<string | null>(null);
  const draggableMarkup = <Draggable>Drag me</Draggable>;

  const handleDragEnd = (event: DragEndEvent) => {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}

      {containers.map((id) => (
        // We updated the Droppable component so it would accept an `id`
        // prop and pass it to `useDroppable`
        <Droppable key={id} id={id}>
          {parent === id ? draggableMarkup : 'Drop here'}
        </Droppable>
      ))}
    </DndContext>
  );
};

export default Board;
