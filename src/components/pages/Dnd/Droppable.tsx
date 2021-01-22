import React, { FC } from 'react';
import { useDroppable } from '@dnd-kit/core';

const Droppable: FC<{ id: string }> = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });
  const style = {
    marginBottom: '10px',
    color: isOver ? 'green' : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};

export default Droppable;
