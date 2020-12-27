/** @jsx jsx */
import React, { FC, Fragment } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/react';
import { Route, Switch } from 'react-router';
import { Box, Flex, Heading, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Navigation from 'components/organisms/Navigation';
import { PATH_ROOT } from 'containers/organisms/RouteManager';
import EnhancedCounterBoard from 'containers/organisms/CounterBoard';

const headerHeight = `55px`;

const headerCss = css`
  height: ${headerHeight};
  width: 100vw;
  background-color: #8abc1e;
`;

const containerCss = css`
  display: flex;
  height: calc(100vh - ${headerHeight});
`;

const navigationCss = css`
  flex: 0 0 auto;
  height: 100%;
  background-color: #00827c;
`;

const mainCss = css`
  margin: 0 auto;
  height: 100%;
  padding-top: 5px;
  width: 100%;
  background-color: #a3c293;
`;

const AdminBaseFrame: FC = () => {
  return (
    <Fragment>
      <div css={headerCss}>
        <Flex>
          <Box>
            <IconButton
              variant="o"
              colorScheme="teal"
              aria-label="Menu open"
              icon={<HamburgerIcon />}
            />
          </Box>
          <Box>
            <Heading>Firebase Admin</Heading>
          </Box>
        </Flex>
      </div>
      <div css={containerCss}>
        <aside css={navigationCss}>
          <Navigation />
        </aside>
        <main css={mainCss}>
          <Switch>
            <Route exact path={PATH_ROOT} component={EnhancedCounterBoard} />
          </Switch>
        </main>
      </div>
    </Fragment>
  );
};

export default AdminBaseFrame;
