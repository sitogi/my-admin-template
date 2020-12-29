/** @jsx jsx */
import React, { FC, Fragment } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/react';
import { Route, Switch } from 'react-router';
import SidebarContainer from 'components/templates/Sidebar/SidebarContainer';
import { PATH_ROOT } from 'components/organisms/RouteManager/RouteManager';
import { HEADER_HEIGHT } from 'components/organisms/PageHeader/PageHeader';
import PageHeaderContainer from 'components/organisms/PageHeader/PageHeaderContainer';

const containerCss = css`
  display: flex;
  height: calc(100vh - ${HEADER_HEIGHT});
`;

const navigationCss = css`
  flex: 0 0 auto;
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
      <PageHeaderContainer />
      <div css={containerCss}>
        <aside css={navigationCss}>
          <SidebarContainer />
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
