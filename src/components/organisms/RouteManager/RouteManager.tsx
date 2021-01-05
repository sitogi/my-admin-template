import React, { FC } from 'react';
import { Route } from 'react-router';
import LoginContainer from 'components/pages/Login/LoginContainer';

export const PATH_ROOT = '/';
export const PATH_LOGIN = '/login';
export const PATH_DASHBOARD = '/dashboard';
export const PATH_USERS = '/users';
export const PATH_AMOUNT = '/amount';

const RouteManager: FC = () => (
  <>
    <Route exact path={PATH_LOGIN} component={LoginContainer} />
  </>
);

export default RouteManager;
