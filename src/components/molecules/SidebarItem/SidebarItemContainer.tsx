import React, { FC } from 'react';
import { IconType } from 'react-icons';
import { PageTitle, sidebarSlice } from 'features/sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import SidebarItem from './SidebarItem';
import { RootState } from '../../../store';

const SidebarItemContainer: FC<{ icon: IconType; label: PageTitle }> = ({ icon, label }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const open = useSelector<RootState, boolean>((state) => state.sidebar.open);
  const activePage = useSelector<RootState, PageTitle>((state) => state.sidebar.activePage);
  const active = activePage === label;
  const { setActivePage } = sidebarSlice.actions;
  const onClicked = (pageTitle: PageTitle) => {
    dispatch(setActivePage(pageTitle));
    history.push(pageTitle);
  };

  return <SidebarItem icon={icon} open={open} active={active} label={label} onClicked={onClicked} />;
};

export default SidebarItemContainer;
