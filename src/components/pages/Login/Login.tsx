/** @jsx jsx */
import React, { FC } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/react';
import { Alert, AlertIcon, Button, Center, Flex, FormControl, FormLabel, Input, Spacer } from '@chakra-ui/react';

interface LoginProps {
  errorMsg: string;
  handleOnChangeEmail: (value: string) => void;
  handleOnChangePassword: (value: string) => void;
  handleOnSubmit: () => void;
}

const containerCss = css`
  background-color: #f4f3ef;
`;

const Login: FC<LoginProps> = ({ errorMsg, handleOnChangeEmail, handleOnChangePassword, handleOnSubmit }) => {
  return (
    <Flex css={containerCss} direction="column" h="100vh" w="100vw" align="center">
      <Spacer />
      {errorMsg && (
        <Center w="800px">
          <Alert status="error">
            {' '}
            <AlertIcon />
            {errorMsg}
          </Alert>
        </Center>
      )}
      <Center w="400px" mt="10px">
        <FormControl id="email">
          <FormLabel color="#777">Email address</FormLabel>
          <Input type="email" onChange={(event) => handleOnChangeEmail(String(event.target.value))} />
        </FormControl>
      </Center>
      <Center w="400px" mt="10px">
        <FormControl id="password">
          <FormLabel color="#777">Password</FormLabel>
          <Input type="password" onChange={(event) => handleOnChangePassword(String(event.target.value))} />
        </FormControl>
      </Center>
      <Flex w="400px" mt="10px">
        <Spacer />
        <Center>
          <Button colorScheme="blue" onClick={() => handleOnSubmit()}>
            Sign In
          </Button>
        </Center>
      </Flex>
      <Spacer />
    </Flex>
  );
};

export default Login;
