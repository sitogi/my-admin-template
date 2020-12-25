/** @jsx jsx */
import React, { FC } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/react';
import { Route, Switch } from 'react-router';
import AdminBaseFrame from 'components/page/AdminBaseFrame';
import Navigation from 'components/organisms/Navigation';
import Auth from 'containers/organisms/Auth';
import RouteManager, { PATH_ROOT } from 'containers/organisms/RouteManager';

const baseCss = css`
  height: 100vh;
`;

const containerCss = css`
  display: flex;
`;

const navigationCss = css`
  flex: 0 0 auto;
  height: 100vh;
`;

const mainCss = css`
  margin: 0 auto;
  padding-top: 5px;
  width: 88%;
`;

const App: FC = () => {
  return (
    <div css={baseCss}>
      <RouteManager />
      <Auth>
        <div css={containerCss}>
          <aside css={navigationCss}>
            <Navigation />
          </aside>
          <main css={mainCss}>
            <Switch>
              <Route exact path={PATH_ROOT} component={AdminBaseFrame} />
            </Switch>
          </main>
        </div>
      </Auth>
    </div>
  );
};

export default App;
