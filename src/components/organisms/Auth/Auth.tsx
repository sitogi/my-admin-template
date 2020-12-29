import React, { FC } from 'react';
import { Redirect } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'firebase/instances';
import { PATH_LOGIN } from 'components/organisms/RouteManager/RouteManager';
import Loader from 'components/atoms/Loader/Loader';

const Auth: FC = ({ children }) => {
  // https://github.com/CSFrequency/react-firebase-hooks/issues/92
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (user) {
    return <>{children}</>;
  }

  return <Redirect to={PATH_LOGIN} />;
};

export default Auth;
