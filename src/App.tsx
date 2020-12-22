import React, { FC } from 'react';
import Auth from 'containers/organisms/Auth';
import RouteManager from 'containers/organisms/RouteManager';
import AdminBaseFrame from './components/page/AdminBaseFrame';

const App: FC = () => (
  <div className="container">
    <RouteManager />
    <Auth>
      <header>
        <h1>Admin Dashboard</h1>
      </header>
      <AdminBaseFrame />
    </Auth>
  </div>
);

export default App;
