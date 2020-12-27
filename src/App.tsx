/** @jsx jsx */
import React, { FC } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/react';
import Auth from 'containers/organisms/Auth';
import RouteManager from 'containers/organisms/RouteManager';
import AdminBaseFrame from './components/page/AdminBaseFrame';

const baseCss = css`
  height: 100vh;
`;

const App: FC = () => {
  return (
    <div css={baseCss}>
      <RouteManager />
      <Auth>
        <AdminBaseFrame />
      </Auth>
    </div>
  );
};

export default App;
