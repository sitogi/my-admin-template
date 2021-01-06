import React, { FC } from 'react';
import { useColorMode } from '@chakra-ui/react';
import ColorModeToggle from './ColorModeToggle';

const ColorModeToggleContainer: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return <ColorModeToggle colorMode={colorMode} onClick={toggleColorMode} />;
};

export default ColorModeToggleContainer;
