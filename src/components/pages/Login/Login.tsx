import { Alert, AlertIcon, Button, Container, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { FC } from 'react';

interface LoginProps {
  errorMsg: string;
  handleOnChangeEmail: (value: string) => void;
  handleOnChangePassword: (value: string) => void;
  handleOnSubmit: () => void;
}

const Login: FC<LoginProps> = ({ errorMsg, handleOnChangeEmail, handleOnChangePassword, handleOnSubmit }) => {
  return (
    <Container>
      {errorMsg && (
        <Alert status="error">
          <AlertIcon />
          {errorMsg}
        </Alert>
      )}
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" onChange={(event) => handleOnChangeEmail(String(event.target.value))} />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" onChange={(event) => handleOnChangePassword(String(event.target.value))} />
      </FormControl>
      <Button colorScheme="blue" onClick={() => handleOnSubmit()}>
        Button
      </Button>
    </Container>
  );
};

export default Login;
