import React, { useRef } from 'react';
import { Text } from '@chakra-ui/react';
import { useDrag, useDrop, DropTargetMonitor, XYCoord } from 'react-dnd';
import ItemTypes from './ItemTypes';

export interface CardProps {
  id: string;
  text: string;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const Card: React.FC<CardProps> = ({ id, text, index, moveCard }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover: (item: DragItem, monitor: DropTargetMonitor) => {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex; // eslint-disable-line no-param-reassign
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <Text
      ref={ref}
      m="10px"
      p="10px"
      h="80px"
      cursor="move"
      bg="orange.50"
      opacity={opacity}
      rounded="xl"
      border="1px"
      borderColor="gray.200"
    >
      {text}
    </Text>
  );
};

export default Card;
