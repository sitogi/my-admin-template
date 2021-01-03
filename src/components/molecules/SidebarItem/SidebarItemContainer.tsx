import React, { FC } from 'react';
import { IconType } from 'react-icons';
import { PageTitle, sidebarSlice } from 'features/sidebar';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import SidebarItem from './SidebarItem';

const SidebarItemContainer: FC<{ icon: IconType; active: boolean; expanded: boolean; label: PageTitle }> = ({
  icon,
  active,
  expanded,
  label,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { setActivePage } = sidebarSlice.actions;

  const onClicked = (pageTitle: PageTitle) => {
    dispatch(setActivePage(pageTitle));
    history.push(pageTitle);
  };

  return <SidebarItem icon={icon} expanded={expanded} active={active} label={label} onClicked={onClicked} />;
};

export default SidebarItemContainer;
