/** @jsx jsx */
import React, { FC } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { jsx } from '@emotion/react';
import { auth } from 'firebase/instances';
import Logout from './Logout';

const LogoutContainer: FC = () => {
  const logout = () => {
    void auth.signOut();
  };

  return <Logout onClick={logout} />;
};

export default LogoutContainer;
