/** @jsx jsx */
import React, { FC } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/react';
import { Box, Button, Flex, Heading, IconButton, Spacer } from '@chakra-ui/react';
import { ArrowLeftIcon, HamburgerIcon } from '@chakra-ui/icons';
import VerticallyCentered from 'components/molecules/VertialyCentered';

export const HEADER_HEIGHT = `55px`;

const headerCss = css`
  height: ${HEADER_HEIGHT};
  width: 100vw;
  background-color: #e8f6ff;
`;

interface PageHeaderProps {
  menuVisible: boolean;
  menuButtonClicked: () => void;
}

const PageHeader: FC<PageHeaderProps> = ({ menuVisible, menuButtonClicked }) => (
  <div css={headerCss}>
    <VerticallyCentered>
      <Flex>
        <Box>
          <IconButton
            variant="o"
            aria-label="Menu open"
            size="lg"
            icon={menuVisible ? <ArrowLeftIcon /> : <HamburgerIcon />}
            onClick={(_event) => menuButtonClicked()}
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
    </VerticallyCentered>
  </div>
);

export default PageHeader;
