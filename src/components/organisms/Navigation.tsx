/** @jsx jsx */
import React, { FC, useState } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { jsx } from '@emotion/react';
import { useHistory } from 'react-router';
import { Menu, MenuItemProps } from 'semantic-ui-react';
import { PATH_ROOT } from 'containers/organisms/RouteManager';

const Navigation: FC = () => {
  const history = useHistory();

  const [activeItem, setActiveItem] = useState<string | undefined>('home');

  return (
    <Menu pointing secondary vertical>
      <Menu.Item
        name="home"
        active={activeItem === 'home'}
        onClick={(
          e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
          { name }: MenuItemProps,
        ) => {
          setActiveItem(name);
          history.push(PATH_ROOT);
        }}
      />
      <Menu.Item
        name="settings"
        active={activeItem === 'settings'}
        onClick={(
          e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
          { name }: MenuItemProps,
        ) => {
          setActiveItem(name);
          history.push(PATH_ROOT);
        }}
      />
      <Menu.Item
        name="canvas"
        active={activeItem === 'canvas'}
        onClick={(
          e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
          { name }: MenuItemProps,
        ) => {
          setActiveItem(name);
          history.push(PATH_ROOT);
        }}
      />
      <Menu.Item
        name="logout"
        active={activeItem === 'logout'}
        onClick={(
          e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
          { name }: MenuItemProps,
        ) => {
          setActiveItem(name);
          // TODO: not implemented yet.
        }}
      />
    </Menu>
  );
};

export default Navigation;
