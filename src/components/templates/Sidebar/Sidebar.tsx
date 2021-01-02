/** @jsx jsx */
import React, { FC } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/react';
import { Box, Center, Divider, Flex, IconButton, VStack } from '@chakra-ui/react';
import { CalendarIcon, EmailIcon, HamburgerIcon, StarIcon } from '@chakra-ui/icons';
import { HEADER_HEIGHT_PX, SIDEBAR_WIDTH_PX } from 'components/styleConstants';
import VerticallyCentered from 'components/molecules/VerticalyCentered/VertialyCentered';

const sidebarCss = css`
  flex: 0 0 auto;
  width: ${SIDEBAR_WIDTH_PX};
  height: 100%;
  font-family: Muli, Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #908d8c;
  background-color: #fff;
`;

const sidebarSmallCss = css`
  flex: 0 0 auto;
  width: 70px;
  height: 100%;
  font-family: Muli, Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #908d8c;
  background-color: #fff;
`;

const hover = css`
  &:hover {
    color: #242428;
    cursor: pointer;
  }
`;

const appTitleCss = css`
  width: 100%;
  font-family: Muli, Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: 300;
  color: #908d8c;
  text-align: center;
`;

const appTitle = (hamburgerClicked: () => void) => (
  <Box h={HEADER_HEIGHT_PX}>
    <VerticallyCentered>
      <Flex>
        <IconButton
          icon={<HamburgerIcon />}
          variant="o"
          colorScheme="teal"
          aria-label="Menu open"
          onClick={(_event) => hamburgerClicked()}
          mt="5px"
          w="70px"
          h="70px"
          css={hover}
          size="lg"
        />
        <Center ml="5px" mt="5px">
          <p css={appTitleCss}>FB Admin</p>
        </Center>
      </Flex>
    </VerticallyCentered>
  </Box>
);

const menuItem = (iconNode: any, label: string) => (
  <Box h="60px" css={hover}>
    <IconButton icon={iconNode} variant="o" colorScheme="teal" aria-label="Menu open" size="lg" w="70px" h="70px" />
    {label}
  </Box>
);

const closedMenuItem = (iconNode: any) => (
  <Box h="60px" css={hover}>
    <IconButton icon={iconNode} variant="o" colorScheme="teal" aria-label="Menu open" size="lg" w="70px" h="70px" />
  </Box>
);

const closedAppTitle = (hamburgerClicked: () => void) => (
  <Box h={HEADER_HEIGHT_PX}>
    <VerticallyCentered>
      <IconButton
        icon={<HamburgerIcon />}
        variant="o"
        colorScheme="teal"
        aria-label="Menu open"
        onClick={(_event) => hamburgerClicked()}
        w="70px"
        h="70px"
        mt="5px"
        css={hover}
        size="lg"
      />
    </VerticallyCentered>
  </Box>
);

const Sidebar: FC<{ visible: boolean; hamburgerClicked: () => void }> = ({ visible, hamburgerClicked }) => {
  if (visible) {
    return (
      <div css={sidebarCss}>
        <VStack align="stretch">
          {appTitle(hamburgerClicked)}
          <Divider />
          {menuItem(<CalendarIcon />, 'USERS')}
          <Divider />
          {menuItem(<StarIcon />, 'ORDERS')}
          <Divider />
          {menuItem(<EmailIcon />, 'STATUSES')}
          <Divider />
        </VStack>
      </div>
    );
  }

  return (
    <div css={sidebarSmallCss}>
      <VStack align="stretch">
        {closedAppTitle(hamburgerClicked)}
        <Divider />
        {closedMenuItem(<CalendarIcon />)}
        <Divider />
        {closedMenuItem(<StarIcon />)}
        <Divider />
        {closedMenuItem(<EmailIcon />)}
        <Divider />
      </VStack>
    </div>
  );
};

export default Sidebar;
