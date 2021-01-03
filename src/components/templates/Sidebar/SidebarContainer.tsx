import React, { FC, useState } from 'react';
import Sidebar from 'components/templates/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { PageTitle } from 'features/sidebar';

const SidebarContainer: FC = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const activePage = useSelector<RootState, PageTitle>((state) => state.sidebar.activePage);

  return <Sidebar visible={visible} hamburgerClicked={() => setVisible(!visible)} activePage={activePage} />;
};

export default SidebarContainer;
