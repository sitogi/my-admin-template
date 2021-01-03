import React, { FC } from 'react';
import { Route } from 'react-router';
import LoginContainer from 'components/pages/Login/LoginContainer';

export const PATH_ROOT = '/';
export const PATH_LOGIN = '/login';
export const PATH_DASHBOARD = '/Dashboard'; // TODO: small case
export const PATH_USERS = '/Users'; // TODO: small case
export const PATH_AMOUNT = '/Amount'; // TODO: small case

const RouteManager: FC = () => (
  <>
    <Route exact path={PATH_LOGIN} component={LoginContainer} />
  </>
);

export default RouteManager;
