import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
import Auth from 'components/organisms/Auth/Auth';
import RouteManager from 'components/organisms/RouteManager/RouteManager';
import AdminBaseFrame from 'components/pages/AdminBaseFrame/AdminBaseFrame';

const App: FC = () => {
  return (
    <Box h="100vh">
      <RouteManager />
      <Auth>
        <AdminBaseFrame />
      </Auth>
    </Box>
  );
};

export default App;
