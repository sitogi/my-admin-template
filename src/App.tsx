import React, { FC } from 'react';
import Auth from 'containers/organisms/Auth';
import MiniDrawer from 'components/organisms/MiniDrawer';
import RouteManager from 'containers/organisms/RouteManager';

const App: FC = () => (
  <div className="container">
    <RouteManager />
    <Auth>
      <header>
        <h1>Admin Dashboard</h1>
      </header>
      <MiniDrawer />
    </Auth>
  </div>
);

export default App;
