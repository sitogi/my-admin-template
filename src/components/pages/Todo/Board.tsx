import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ListContainer from './ListContainer';

const Board: FC = () => (
  <Box overflowY="auto" h="100%">
    <DndProvider backend={HTML5Backend}>
      <ListContainer />
    </DndProvider>
  </Box>
);

export default Board;
