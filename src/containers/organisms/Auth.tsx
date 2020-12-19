import React, { FC } from 'react';
import { Redirect } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'firebase/instances';

const Auth: FC = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (user) {
    return <div>{children}</div>;
  }

  return <Redirect to="/login" />;
};

export default Auth;
