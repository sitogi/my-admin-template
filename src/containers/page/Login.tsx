import React, { FC, FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { auth } from 'firebase/instances';
import Login from 'components/page/Login';

const LoginContainer: FC = () => {
  const [email, setEmail] = useState<string>(localStorage.userEmail ?? '');
  const [password, setPassword] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const history = useHistory();

  // TODO: add Loader or Splash

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
      try {
        await auth.signInWithEmailAndPassword(email, password);
        localStorage.userEmail = email;
        history.push('/'); // TODO: to constant
      } catch (error) {
        setErrorMsg(error);
      }
    }
  };

  return (
    <Login
      errorMsg={errorMsg}
      handleOnChangeEmail={(value) => setEmail(value)}
      handleOnChangePassword={(value) => setPassword(value)}
      handleOnSubmit={handleOnSubmit}
    />
  );
};

export default LoginContainer;
