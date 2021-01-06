import React, { FC } from 'react';
import { Icon } from '@chakra-ui/react';
import { MdBrightness2, MdBrightness5 } from 'react-icons/md';

const ColorModeToggle: FC<{ colorMode: string; onClick: () => void }> = ({ colorMode, onClick }) => (
  <Icon
    as={colorMode !== 'light' ? MdBrightness5 : MdBrightness2}
    w={5}
    h={5}
    mt="7px"
    mr="30px"
    onClick={onClick}
    cursor="pointer"
    _hover={{ color: 'teal.400' }}
  />
);

export default ColorModeToggle;
