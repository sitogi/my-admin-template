/** @jsx jsx */
import React, { FC } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { jsx } from '@emotion/react';
import { Spinner } from '@chakra-ui/react';

const HorizontallyVerticallyCentered = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div
    style={{
      display: 'grid',
      placeItems: 'center',
      height: '100%',
    }}
  >
    {children}
  </div>
);

const Loader: FC = () => (
  <HorizontallyVerticallyCentered>
    <Spinner size="x1" />
  </HorizontallyVerticallyCentered>
);

export default Loader;
