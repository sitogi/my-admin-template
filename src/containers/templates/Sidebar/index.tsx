/** @jsx jsx */
import React, { FC } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { jsx } from '@emotion/react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import Sidebar from 'components/templates/Sidebar';

const SidebarContainer: FC = () => {
  const visible = useSelector<RootState, boolean>((state) => state.sidebar.visible);

  return <Sidebar visible={visible} />;
};

export default SidebarContainer;
