import React, { FC } from 'react';
import { auth } from 'firebase/instances';
import Logout from './Logout';

const LogoutContainer: FC = () => {
  const logout = () => {
    // TODO: ストアをリセットする処理を追加する
    void auth.signOut();
  };

  return <Logout onClick={logout} />;
};

export default LogoutContainer;
