/** @jsx jsx */
import React, { FC } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/react';
import { Box, Divider, IconButton, VStack } from '@chakra-ui/react';
import { CalendarIcon, EmailIcon, StarIcon } from '@chakra-ui/icons';

const sidebarCss = css`
  flex: 0 0 auto;
  height: 100%;
  width: 250px;
  background-color: #d9ffdb;
`;

const sidebarSmallCss = css`
  flex: 0 0 auto;
  height: 100%;
  width: 50px;
  background-color: #d9ffdb;
`;

const Sidebar: FC<{ visible: boolean }> = ({ visible }) => {
  if (visible) {
    return (
      <div css={sidebarCss}>
        <VStack align="stretch">
          <Divider />
          <Box h="30px">
            <IconButton icon={<CalendarIcon />} variant="o" colorScheme="teal" aria-label="Menu open" size="lg" />
            Users
          </Box>
          <Divider />
          <Box h="30px">
            <IconButton icon={<StarIcon />} variant="o" colorScheme="teal" aria-label="Menu open" size="lg" />
            Orders
          </Box>
          <Divider />
          <Box h="30px">
            <IconButton icon={<EmailIcon />} variant="o" colorScheme="teal" aria-label="Menu open" size="lg" />
            Statuses
          </Box>
          <Divider />
        </VStack>
      </div>
    );
  }

  return (
    <div css={sidebarSmallCss}>
      <VStack align="stretch">
        <Divider />
        <Box h="30px">
          <IconButton icon={<CalendarIcon />} variant="o" colorScheme="teal" aria-label="Menu open" size="lg" />
        </Box>
        <Divider />
        <Box h="30px">
          <IconButton icon={<StarIcon />} variant="o" colorScheme="teal" aria-label="Menu open" size="lg" />
        </Box>
        <Divider />
        <Box h="30px">
          <IconButton icon={<EmailIcon />} variant="o" colorScheme="teal" aria-label="Menu open" size="lg" />
        </Box>
        <Divider />
      </VStack>
    </div>
  );
};

export default Sidebar;
