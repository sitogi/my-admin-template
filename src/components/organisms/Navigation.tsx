/** @jsx jsx */
import React, { FC } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { jsx } from '@emotion/react';
import { Box, Divider, VStack } from '@chakra-ui/react';

const Navigation: FC = () => {
  return (
    <VStack align="stretch">
      <Divider />
      <Box h="40px">Users</Box>
      <Divider />
      <Box h="40px">Orders</Box>
      <Divider />
      <Box h="40px">Statuses</Box>
      <Divider />
    </VStack>
  );
};

export default Navigation;
