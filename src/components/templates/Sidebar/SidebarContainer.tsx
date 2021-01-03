import React, { FC } from 'react';
import Sidebar from 'components/templates/Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { sidebarSlice } from 'features/sidebar';

const SidebarContainer: FC = () => {
  const dispatch = useDispatch();
  const open = useSelector<RootState, boolean>((state) => state.sidebar.open);
  const { setOpen } = sidebarSlice.actions;

  return <Sidebar open={open} hamburgerClicked={() => dispatch(setOpen(!open))} />;
};

export default SidebarContainer;
