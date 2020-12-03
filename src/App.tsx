import React, { FC } from 'react';

import './App.css';
import MiniDrawer from './components/organisms/MiniDrawer';

const App: FC = () => (
  <div className="container">
    <header>
      <h1>Admin Dashboard</h1>
    </header>
    <MiniDrawer />
  </div>
);

export default App;
