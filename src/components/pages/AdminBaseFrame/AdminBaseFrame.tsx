/** @jsx jsx */
import React, { FC, Fragment } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/react';
import { Route, Switch } from 'react-router';
import { PATH_ROOT } from 'components/organisms/RouteManager/RouteManager';
import SidebarContainer from 'components/templates/Sidebar/SidebarContainer';
import PageHeader from 'components/organisms/PageHeader/PageHeader';

const containerCss = css`
  display: flex;
  height: 100vh;
`;

const navigationCss = css`
  flex: 0 0 auto;
`;

const mainCss = css`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  background-color: #f4f3ef;
`;

const contentsCss = css`
  margin: 30px;
  background-color: #f4f3ef;
`;

const DummyContent = () => (
  <div>
    <p>あいうえお</p>
  </div>
);

const AdminBaseFrame: FC = () => {
  return (
    <Fragment>
      <div css={containerCss}>
        <aside css={navigationCss}>
          <SidebarContainer />
        </aside>
        <main css={mainCss}>
          <PageHeader />
          <div css={contentsCss}>
            <Switch>
              <Route exact path={PATH_ROOT} component={DummyContent} />
            </Switch>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default AdminBaseFrame;
