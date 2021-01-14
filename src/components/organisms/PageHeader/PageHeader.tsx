import React, { FC } from 'react';
import { Box, Divider, Flex, Spacer, Text } from '@chakra-ui/react';
import VerticallyCentered from 'components/molecules/VerticalyCentered/VertialyCentered';
import { HEADER_HEIGHT_PX } from 'components/styleConstants';
import LogoutContainer from 'components/atoms/Logout/LogoutContainer';
import ColorModeToggleContainer from 'components/atoms/ColorModeToggle/ColorModeToggleContainer';

const PageHeader: FC<{ activePageTitle?: string }> = ({ activePageTitle = 'Dashboard' }) => (
  <Box
    css={{ height: `calc(${HEADER_HEIGHT_PX} + 0.5rem)` }}
    w="100%"
    fontFamily=""
    fontSize="20px"
    fontWeight="600"
    color="#777"
    bg="#f4f3ef"
  >
    <VerticallyCentered>
      <Flex>
        <Box mt="5px" ml="30px">
          <Text textTransform="capitalize">{activePageTitle}</Text>
        </Box>
        <Spacer />
        <ColorModeToggleContainer />
        <Box mr="30px">
          <LogoutContainer />
        </Box>
      </Flex>
    </VerticallyCentered>
    <Divider />
  </Box>
);

export default PageHeader;
