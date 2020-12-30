import React, { FC } from 'react';
import { Box, Divider, Flex, Heading, Spacer } from '@chakra-ui/react';
import VerticallyCentered from 'components/molecules/VerticalyCentered/VertialyCentered';
import { HEADER_HEIGHT_PX, SIDEBAR_WIDTH_PX } from 'components/styleConstants';
import LogoutButtonContainer from 'components/atoms/LogoutButton/LogoutButtonContainer';

const PageHeader: FC<{ currentPageTitle?: string }> = ({ currentPageTitle = 'Dashboard' }) => (
  <div>
    <VerticallyCentered>
      <Flex>
        <Box>
          <Heading as="h3" size="lg" ml="30px">
            {currentPageTitle}
          </Heading>
        </Box>
        <Spacer />
        <Box mr="30px">
          <LogoutButtonContainer />
        </Box>
      </Flex>
    </VerticallyCentered>
    <Divider />
  </div>
);

export default PageHeader;
