/** @jsx jsx */
import React, { FC, useState } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { jsx, css } from '@emotion/react';
import { useHistory } from 'react-router';
import { Menu, MenuItemProps, Header } from 'semantic-ui-react';
import { PATH_ROOT } from 'containers/organisms/RouteManager';

const spaceName = css`
  padding-bottom: 20px;
  padding-left: 10px;
  padding-top: 20px;
`;

const Navigation: FC = () => {
  const history = useHistory();

  const [activeItem, setActiveItem] = useState<string | undefined>('home');

  return (
    <div>
      <div css={spaceName}>
        {/* TODO: スペースの設定画像を埋め込むようにする */}
        <Header
          as="h3"
          image=" https://react.semantic-ui.com/images/icons/school.png "
          content="Learn More!"
        />
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default Navigation;
