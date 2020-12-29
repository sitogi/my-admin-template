/** @jsx jsx */
import React, { FC } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { jsx } from '@emotion/react';
import { Spinner } from '@chakra-ui/react';
import HorizontallyVerticallyCentered from 'components/molecules/HrizontallyVerticallyCentered/HorizontallyVerticallyCentered';

const Loader: FC = () => (
  <HorizontallyVerticallyCentered>
    <Spinner size="x1" />
  </HorizontallyVerticallyCentered>
);

export default Loader;
