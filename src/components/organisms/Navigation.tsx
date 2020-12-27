/** @jsx jsx */
import React, { FC } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { jsx } from '@emotion/react';
import { Box, StackDivider, VStack } from '@chakra-ui/react';

const Navigation: FC = () => {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
      <Box h="40px">Users</Box>
      <Box h="40px">Orders</Box>
      <Box h="40px">Statuses</Box>
    </VStack>
  );
};

export default Navigation;
