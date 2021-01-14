/** @jsx jsx */
import React, { FC, Fragment } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/react';
import { Box, Center, Divider, Flex, IconButton, Text, VStack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { MdAttachMoney, MdDashboard, MdList, MdPersonOutline } from 'react-icons/md';
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
          size="lg"
          _hover={{ color: 'teal.400' }}
        />
        <Center ml="5px" mt="5px">
          <Text
            w="100%"
            fontFamily="Muli, Helvetica, Arial, sans-serif"
            fontSize="20px"
            fontWeight="300"
            color="#908d8c"
            textAlign="center"
          >
            FB Admin
          </Text>
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
        size="lg"
        _hover={{ color: 'teal.400' }}
      />
    </VerticallyCentered>
  </Box>
);

const itemList = (
  <Fragment>
    <SidebarItemContainer icon={MdDashboard} label="dashboard" />
    <SidebarItemContainer icon={MdPersonOutline} label="users" />
    <SidebarItemContainer icon={MdAttachMoney} label="amount" />
    <SidebarItemContainer icon={MdList} label="todo" />
  </Fragment>
);

const Sidebar: FC<{ open: boolean; hamburgerClicked: () => void }> = ({ open, hamburgerClicked }) => {
  // TODO: 簡素化できる
  if (open) {
    return (
      <Box css={sidebarCss}>
        <VStack align="stretch">
          {appTitle(hamburgerClicked)}
          <Divider />
          {itemList}
        </VStack>
      </Box>
    );
  }

  return (
    <Box css={sidebarSmallCss}>
      <VStack align="stretch">
        {hamburgerButton(hamburgerClicked)}
        <Divider />
        {itemList}
      </VStack>
    </Box>
  );
};

export default Sidebar;
