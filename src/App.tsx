import React, { FC } from 'react';
import { Route } from 'react-router';
import 'App.css';
import { Auth } from 'containers/organisms/Auth';
import { MiniDrawer } from 'components/organisms/MiniDrawer';
import LoginContainer from 'containers/page/Login';

const App: FC = () => (
  <div className="container">
    <Route exact path="/login" component={LoginContainer} />
    <Auth>
      <header>
        <h1>Admin Dashboard</h1>
      </header>
      <MiniDrawer />
    </Auth>
  </div>
);

export default App;
