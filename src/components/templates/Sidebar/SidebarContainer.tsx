/** @jsx jsx */
import React, { FC, useState } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { jsx } from '@emotion/react';
import Sidebar from 'components/templates/Sidebar/Sidebar';

const SidebarContainer: FC = () => {
  const [visible, setVisible] = useState<boolean>(true);

  return <Sidebar visible={visible} hamburgerClicked={() => setVisible(!visible)} />;
};

export default SidebarContainer;
