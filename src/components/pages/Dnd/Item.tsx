import React, { FC } from 'react';
import { Text } from '@chakra-ui/react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Item: FC<{ id: string; text: string }> = ({ id, text }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  return (
    <Text
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      m="10px"
      p="10px"
      h="80px"
      w="150px"
      cursor="move"
      bg="orange.50"
      rounded="xl"
      border="1px"
      borderColor="gray.200"
      transform={CSS.Transform.toString(transform)}
      transition={transition}
    >
      {text}
    </Text>
  );
};

export default Item;
