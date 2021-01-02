import React, { FC } from 'react';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { MdPowerSettingsNew } from 'react-icons/md';

const Logout: FC<{ onClick: () => void }> = ({ onClick }) => (
  <Flex color="#9a9a9a" cursor="pointer" onClick={onClick} _hover={{ color: 'teal.400' }}>
    <Icon as={MdPowerSettingsNew} w={5} h={5} mt="7px" />
    <Text mt="5px" ml="4px" fontSize="16px" fontWeight="100">
      Logout
    </Text>
  </Flex>
);

export default Logout;
