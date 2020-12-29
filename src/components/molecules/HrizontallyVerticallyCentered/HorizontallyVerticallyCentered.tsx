/** @jsx jsx */
import React, { FC } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { jsx } from '@emotion/react';

const HorizontallyVerticallyCentered: FC = ({ children }) => (
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

export default HorizontallyVerticallyCentered;
