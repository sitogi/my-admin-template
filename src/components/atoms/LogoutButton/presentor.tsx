/** @jsx jsx */
import React, { FC } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { jsx } from '@emotion/react';
import { Button } from '@chakra-ui/react';

const LogoutButton: FC<{ onClick: () => void }> = ({ onClick }) => (
  <Button colorScheme="blue" onClick={onClick}>
    Logout
  </Button>
);

export default LogoutButton;
