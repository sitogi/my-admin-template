import React, { FC } from 'react';
import Auth from 'components/organisms/Auth/Auth';
import RouteManager from 'components/organisms/RouteManager/RouteManager';
import AdminBaseFrame from 'components/pages/AdminBaseFrame/AdminBaseFrame';

const App: FC = () => {
  return (
    <div>
      <RouteManager />
      <Auth>
        <AdminBaseFrame />
      </Auth>
    </div>
  );
};

export default App;
