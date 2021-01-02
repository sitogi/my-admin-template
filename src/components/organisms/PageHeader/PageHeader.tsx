/** @jsx jsx */
import React, { FC } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/react';
import { Box, Divider, Flex, Spacer } from '@chakra-ui/react';
import VerticallyCentered from 'components/molecules/VerticalyCentered/VertialyCentered';
import { HEADER_HEIGHT_PX } from 'components/styleConstants';
import LogoutContainer from 'components/atoms/Logout/LogoutContainer';

const headerCss = css`
  width: 100%;
  height: calc(${HEADER_HEIGHT_PX} + 0.5rem);
  font-family: Muli, Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #777;
  background-color: #f4f3ef;
`;

const PageHeader: FC<{ currentPageTitle?: string }> = ({ currentPageTitle = 'Dashboard' }) => (
  <div css={headerCss}>
    <VerticallyCentered>
      <Flex>
        <Box mt="5px" ml="30px">
          {currentPageTitle}
        </Box>
        <Spacer />
        <Box mr="30px">
          <LogoutContainer />
        </Box>
      </Flex>
    </VerticallyCentered>
    <Divider />
  </div>
);

export default PageHeader;
