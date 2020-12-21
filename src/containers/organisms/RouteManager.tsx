import React, { FC } from 'react';
import { Route } from 'react-router';
import LoginContainer from 'containers/page/Login';

export const PATH_ROOT = '/';
export const PATH_LOGIN = '/login';

const RouteManager: FC = () => (
  <>
    <Route exact path={PATH_LOGIN} component={LoginContainer} />
  </>
);

export default RouteManager;
