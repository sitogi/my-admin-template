import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
import ListContainer from './ListContainer';

const Board: FC = () => (
  <Box overflowY="auto" h="100%">
    <ListContainer />
  </Box>
);

export default Board;
