/** @jsx jsx */
import React, { FC } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/react';
import { Box, Divider, Flex, Heading, IconButton, VStack } from '@chakra-ui/react';
import { CalendarIcon, EmailIcon, HamburgerIcon, StarIcon } from '@chakra-ui/icons';
import { HEADER_HEIGHT_PX, SIDEBAR_WIDTH_PX } from 'components/styleConstants';
import VerticallyCentered from 'components/molecules/VerticalyCentered/VertialyCentered';

const sidebarCss = css`
  flex: 0 0 auto;
  height: 100%;
  width: ${SIDEBAR_WIDTH_PX};
  background-color: #ffffff;
`;

const sidebarSmallCss = css`
  flex: 0 0 auto;
  height: 100%;
  width: 50px;
  background-color: #ffffff;
`;

const Sidebar: FC<{ visible: boolean; hamburgerClicked: () => void }> = ({ visible, hamburgerClicked }) => {
  if (visible) {
    return (
      <div css={sidebarCss}>
        <VStack align="stretch">
          <Box h={HEADER_HEIGHT_PX}>
            <VerticallyCentered>
              <Flex>
                <IconButton
                  icon={<HamburgerIcon />}
                  variant="o"
                  colorScheme="teal"
                  aria-label="Menu open"
                  size="lg"
                  onClick={(_event) => hamburgerClicked()}
                  mt="5px"
                />
                <Heading as="h3" size="lg" mt="10px">
                  FB Admin
                </Heading>
              </Flex>
            </VerticallyCentered>
          </Box>
          <Divider />
          <Box h="30px">
            <IconButton icon={<CalendarIcon />} variant="o" colorScheme="teal" aria-label="Menu open" size="lg" />
            Users
          </Box>
          <Divider />
          <Box h="30px">
            <IconButton icon={<StarIcon />} variant="o" colorScheme="teal" aria-label="Menu open" size="lg" />
            Orders
          </Box>
          <Divider />
          <Box h="30px">
            <IconButton icon={<EmailIcon />} variant="o" colorScheme="teal" aria-label="Menu open" size="lg" />
            Statuses
          </Box>
          <Divider />
        </VStack>
      </div>
    );
  }

  return (
    <div css={sidebarSmallCss}>
      <VStack align="stretch">
        <Box h={HEADER_HEIGHT_PX}>
          <VerticallyCentered>
            <IconButton
              icon={<HamburgerIcon />}
              variant="o"
              colorScheme="teal"
              aria-label="Menu open"
              size="lg"
              onClick={(_event) => hamburgerClicked()}
            />
          </VerticallyCentered>
        </Box>
        <Divider />
        <Box h="30px">
          <IconButton icon={<CalendarIcon />} variant="o" colorScheme="teal" aria-label="Menu open" size="lg" />
        </Box>
        <Divider />
        <Box h="30px">
          <IconButton icon={<StarIcon />} variant="o" colorScheme="teal" aria-label="Menu open" size="lg" />
        </Box>
        <Divider />
        <Box h="30px">
          <IconButton icon={<EmailIcon />} variant="o" colorScheme="teal" aria-label="Menu open" size="lg" />
        </Box>
        <Divider />
      </VStack>
    </div>
  );
};

export default Sidebar;
