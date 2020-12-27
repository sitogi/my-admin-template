import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  CloseButton,
  Container,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React, { FC, FormEvent } from 'react';

interface LoginProps {
  errorMsg: string;
  handleOnChangeEmail: (value: string) => void;
  handleOnChangePassword: (value: string) => void;
  handleOnSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Login: FC<LoginProps> = ({ errorMsg, handleOnChangeEmail, handleOnChangePassword, handleOnSubmit }) => {
  return (
    <Container>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
        <AlertDescription>{errorMsg}</AlertDescription>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" onChange={(event) => handleOnChangeEmail(String(event.target.value))} />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" />
        <Input type="password" onChange={(event) => handleOnChangePassword(String(event.target.value))} />
      </FormControl>
      <Button colorScheme="blue" onClick={() => handleOnSubmit}>
        Button
      </Button>
    </Container>
  );
};

export default Login;
