import React, { FC } from 'react';
import { Box, Flex, IconButton, Spacer, Text } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';
import Card from './Card';

// カードの中身を表す interface
export interface Item {
  id: string;
  text: string;
}

export interface ListProps {
  listTitle: string;
  addCardClicked: () => void;
  cards: Item[];
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

const List: FC<ListProps> = ({ listTitle, addCardClicked, cards, moveCard }) => {
  return (
    <Box w="350px" p="20px" bg="White" rounded="xl" boxShadow="xl">
      <Flex pb="5px">
        <Text pt="5px" fontSize="20px" color="gray.400">
          {listTitle}
        </Text>
        <Spacer />
        <IconButton aria-label="Add todo" icon={<MdAdd />} onClick={() => addCardClicked()} />
      </Flex>
      {cards.map((card, i) => (
        <Card key={card.id} index={i} id={card.id} text={card.text} moveCard={moveCard} />
      ))}
    </Box>
  );
};

export default List;
