import React from 'react';
import { Text } from '@chakra-ui/react';
import { Draggable } from 'react-beautiful-dnd';

export interface CardProps {
  id: string;
  text: string;
  index: number;
}

const Card: React.FC<CardProps> = ({ id, text, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Text
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          m="10px"
          p="10px"
          h="80px"
          cursor="move"
          bg="orange.50"
          rounded="xl"
          border="1px"
          borderColor="gray.200"
        >
          {text}
        </Text>
      )}
    </Draggable>
  );
};

export default Card;
