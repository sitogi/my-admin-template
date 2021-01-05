/** @jsx jsx */
import React, { FC, Fragment } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/react';
import { Box, Center, Divider, Flex, IconButton, VStack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { MdAttachMoney, MdDashboard, MdPersonOutline } from 'react-icons/md';
import { HEADER_HEIGHT_PX, SIDEBAR_WIDTH_PX } from 'components/styleConstants';
import VerticallyCentered from 'components/molecules/VerticalyCentered/VertialyCentered';
import SidebarItemContainer from 'components/molecules/SidebarItem/SidebarItemContainer';

const sidebarCss = css`
  flex: 0 0 auto;
  width: ${SIDEBAR_WIDTH_PX};
  height: 100%;
  font-family: Muli, Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #908d8c;
  background-color: #fff;
  transition-delay: 0s;
  transition-timing-function: ease;
  transition-duration: 100ms;
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
  transition-delay: 0s;
  transition-timing-function: ease;
  transition-duration: 100ms;
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

const hamburgerButton = (hamburgerClicked: () => void) => (
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

const itemList = (
  <Fragment>
    <SidebarItemContainer icon={MdDashboard} label="dashboard" />
    <SidebarItemContainer icon={MdPersonOutline} label="users" />
    <SidebarItemContainer icon={MdAttachMoney} label="amount" />
  </Fragment>
);

const Sidebar: FC<{ open: boolean; hamburgerClicked: () => void }> = ({ open, hamburgerClicked }) => {
  // TODO: 簡素化できる
  if (open) {
    return (
      <div css={sidebarCss}>
        <VStack align="stretch">
          {appTitle(hamburgerClicked)}
          <Divider />
          {itemList}
        </VStack>
      </div>
    );
  }

  return (
    <div css={sidebarSmallCss}>
      <VStack align="stretch">
        {hamburgerButton(hamburgerClicked)}
        <Divider />
        {itemList}
      </VStack>
    </div>
  );
};

export default Sidebar;
