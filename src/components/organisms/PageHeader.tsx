/** @jsx jsx */
import React, { FC } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/react';
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Spacer,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export const HEADER_HEIGHT = `55px`;

const headerCss = css`
  height: ${HEADER_HEIGHT};
  width: 100vw;
  background-color: #e8f6ff;
`;

const PageHeader: FC = () => (
  <div css={headerCss}>
    <Flex>
      <Box>
        <IconButton
          variant="o"
          colorScheme="teal"
          aria-label="Menu open"
          icon={<HamburgerIcon />}
        />
      </Box>
      <Box>
        <Heading>Firebase Admin</Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="blue">Logout</Button>
      </Box>
    </Flex>
  </div>
);

export default PageHeader;
