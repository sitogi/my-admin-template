import React, { FC, useState } from 'react';
import { DndContext, DragEndEvent, DragMoveEvent, DragOverEvent, DragStartEvent } from '@dnd-kit/core';
import { Box, Flex, Spacer, IconButton, Text } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';
import { DragCancelEvent } from '@dnd-kit/core/dist/components/DndContext/DndContext';
import Draggable from './Draggable';
import Droppable from './Droppable';

const Card: FC<{ text: string }> = ({ text }) => (
  <Text
    m="10px"
    p="10px"
    h="80px"
    w="150px"
    cursor="move"
    bg="orange.50"
    rounded="xl"
    border="1px"
    borderColor="gray.200"
  >
    {text}
  </Text>
);

const Board: FC = () => {
  const handleDragStart = (event: DragStartEvent) => {
    console.log('start');
  };
  const handleDragMove = (event: DragMoveEvent) => {
    console.log('move');
    console.log(event.over?.id); // 上にいる droppable の id
  };
  const handleDragOver = (event: DragOverEvent) => {
    console.log('over'); // droppable に重なった瞬間の一瞬だけ発火
  };
  const handleDragEnd = (event: DragEndEvent) => {
    console.log('end');
  };
  const handleDragCancel = (event: DragCancelEvent) => {
    console.log('cancel');
  };

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragMove={handleDragMove}
      onDragOver={handleDragOver}
      onDragCancel={handleDragCancel}
      onDragEnd={handleDragEnd}
    >
      <Droppable id="list">
        <Box w="350px" p="20px" bg="White" rounded="xl" boxShadow="xl">
          <Flex pb="5px">
            <Text pt="5px" fontSize="20px" color="gray.400">
              Drop here!
            </Text>
            <Spacer />
            <IconButton aria-label="Add todo" icon={<MdAdd />} onClick={() => {}} />
          </Flex>
          <Draggable id="a">
            <Card text="Drag me A" />
          </Draggable>
          <Draggable id="b">
            <Card text="Drag me B" />
          </Draggable>
          <Draggable id="c">
            <Card text="Drag me C" />
          </Draggable>
        </Box>
      </Droppable>
    </DndContext>
  );
};

export default Board;
