/** @jsx jsx */
import React, { FC } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/react';
import { Box, Divider, Flex, Heading, Spacer } from '@chakra-ui/react';
import VerticallyCentered from 'components/molecules/VerticalyCentered/VertialyCentered';
import { HEADER_HEIGHT_PX, SIDEBAR_WIDTH_PX } from 'components/styleConstants';
import LogoutButtonContainer from 'components/atoms/LogoutButton/LoginButtonContainer';

const headerCss = css`
  width: calc(100vw - ${SIDEBAR_WIDTH_PX});
  height: calc(${HEADER_HEIGHT_PX} + 0.5rem);
  background-color: #f4f3ef;
`;

const PageHeader: FC<{ currentPageTitle?: string }> = ({ currentPageTitle = 'Dashboard' }) => (
  <div css={headerCss}>
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
