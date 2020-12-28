import React, { FC, useState } from 'react';
import { useHistory } from 'react-router';
import { auth } from 'firebase/instances';
import Login from 'components/pages/Login';
import { PATH_ROOT } from 'containers/organisms/RouteManager';

const LoginContainer: FC = () => {
  const [email, setEmail] = useState<string>(localStorage.userEmail ?? '');
  const [password, setPassword] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const history = useHistory();

  const login = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      localStorage.userEmail = email;
      history.push(PATH_ROOT);
    } catch (e) {
      if (e instanceof Error) {
        setErrorMsg(e.message);
      }
    }
  };

  return (
    <Login
      errorMsg={errorMsg}
      handleOnChangeEmail={(value) => setEmail(value)}
      handleOnChangePassword={(value) => setPassword(value)}
      handleOnSubmit={login}
    />
  );
};

export default LoginContainer;
