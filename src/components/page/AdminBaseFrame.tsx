/** @jsx jsx */
import React, { FC, Fragment } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/react';
import { Route, Switch } from 'react-router';
import Navigation from 'components/organisms/Navigation';
import { PATH_ROOT } from 'containers/organisms/RouteManager';
import PageHeader, { HEADER_HEIGHT } from 'components/organisms/PageHeader';

const containerCss = css`
  display: flex;
  height: calc(100vh - ${HEADER_HEIGHT});
`;

const navigationCss = css`
  flex: 0 0 auto;
  height: 100%;
  width: 240px;
  background-color: #d9ffdb;
`;

const mainCss = css`
  margin: 0 auto;
  height: 100%;
  padding-top: 5px;
  width: 100%;
  background-color: #fff3fb;
`;

const DummyContent = () => (
  <div>
    <p>あいうえお</p>
  </div>
);

const AdminBaseFrame: FC = () => {
  return (
    <Fragment>
      <PageHeader />
      <div css={containerCss}>
        <aside css={navigationCss}>
          <Navigation />
        </aside>
        <main css={mainCss}>
          <Switch>
            <Route exact path={PATH_ROOT} component={DummyContent} />
          </Switch>
        </main>
      </div>
    </Fragment>
  );
};

export default AdminBaseFrame;
