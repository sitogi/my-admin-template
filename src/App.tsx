/** @jsx jsx */
import React, { FC } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/react';
import Auth from 'components/organisms/Auth/Auth';
import RouteManager from 'components/organisms/RouteManager/RouteManager';
import AdminBaseFrame from './components/pages/AdminBaseFrame/AdminBaseFrame';

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
