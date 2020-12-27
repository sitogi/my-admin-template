/** @jsx jsx */
import React, { FC } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { jsx } from '@emotion/react';

const VerticallyCentered: FC = ({ children }) => (
  <div
    style={{
      width: '100%',
      display: 'grid',
      alignContent: 'center',
      height: '100%',
    }}
  >
    {children}
  </div>
);

export default VerticallyCentered;
