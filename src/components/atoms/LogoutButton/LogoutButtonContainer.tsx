/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { jsx } from '@emotion/react';
import { auth } from 'firebase/instances';
import LogoutButton from './LogoutButton';

const LogoutButtonContainer: FC = () => {
  const logout = () => {
    void auth.signOut();
  };

  return <LogoutButton onClick={logout} />;
};

export default LogoutButtonContainer;
