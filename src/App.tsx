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

const App: FC = () => {
  return (
    <div css={baseCss}>
      <RouteManager />
      <Auth>
        <div css={headerCss}>
          <h1>ヘッダーだよ</h1>
        </div>
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
