import React, { FC, Fragment } from 'react';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { PageTitle } from 'features/sidebar';

export interface SidebarItemProps {
  icon: IconType;
  active: boolean;
  open: boolean;
  label: PageTitle;
  onClicked: (pageTitle: PageTitle) => void;
}

const SidebarItem: FC<SidebarItemProps> = ({ icon, active, open, label, onClicked }) => {
  const iconAndLabel = (
    <Fragment>
      <Icon as={icon} w={7} h={7} mt="6px" ml="20px" />
      {open && (
        <Text mt="7px" ml="15px" fontSize="14px" fontWeight="300">
          {label}
        </Text>
      )}
    </Fragment>
  );

  if (active) {
    return (
      <Flex alignItems="center" h="60px" color="red.400">
        {iconAndLabel}
      </Flex>
    );
  }

  return (
    <Flex
      alignItems="center"
      h="60px"
      color="#9a9a9a"
      cursor="pointer"
      _hover={{ color: 'teal.400' }}
      onClick={() => onClicked(label)}
    >
      {iconAndLabel}
    </Flex>
  );
};

export default SidebarItem;
