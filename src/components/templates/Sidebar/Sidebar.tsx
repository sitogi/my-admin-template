import React, { FC } from 'react';
import { Box, Center, Divider, Flex, IconButton, VStack } from '@chakra-ui/react';
import { CalendarIcon, EmailIcon, HamburgerIcon, StarIcon } from '@chakra-ui/icons';
import { HEADER_HEIGHT_PX, SIDEBAR_WIDTH_PX } from 'components/styleConstants';
import VerticallyCentered from 'components/molecules/VerticalyCentered/VertialyCentered';

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
        />
        <Center>
          <p>FB Admin</p>
        </Center>
      </Flex>
    </VerticallyCentered>
  </Box>
);

const menuItem = (iconNode: any, label: string) => (
  <Box h="60px">
    <IconButton icon={iconNode} variant="o" colorScheme="teal" aria-label="Menu open" size="lg" w="70px" h="70px" />
    {label}
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
      />
    </VerticallyCentered>
  </Box>
);

const closedMenuItem = (iconNode: any) => (
  <Box h="60px">
    <IconButton icon={iconNode} variant="o" colorScheme="teal" aria-label="Menu open" w="70px" h="70px" />
  </Box>
);

const Sidebar: FC<{ visible: boolean; hamburgerClicked: () => void }> = ({ visible, hamburgerClicked }) => {
  if (visible) {
    return (
      <div>
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
    <div>
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
