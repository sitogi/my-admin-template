import React, { FC } from 'react';
import { Route } from "react-router";
import './App.css';
import { Auth } from "./containers/organisms/Auth";
import { Login } from "./components/page/Login";
import { MiniDrawer } from './components/organisms/MiniDrawer';

const App: FC = () => (
  <div className="container">
    <Route exact path="/login" component={Login} />
    <Auth>
      <header>
        <h1>Admin Dashboard</h1>
      </header>
      <MiniDrawer />
    </Auth>
  </div>
);

export default App;
