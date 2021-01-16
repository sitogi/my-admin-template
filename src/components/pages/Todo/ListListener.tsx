import React, { FC } from 'react';
import { useCollectionData, useDocumentData } from '@lukaselmer/react-firebase-hooks/firestore';
import { firestore } from 'firebase/instances';
import { useDispatch } from 'react-redux';
import { Card, CardList, todoListSlice } from 'features/todoList';

const sortCards = (cards: Card[], order: string[]): Card[] => {
  const sorted: Card[] = [];

  order.forEach((o) => {
    const found = cards.find((c) => c.id === o);
    if (found) {
      sorted.push(found);
    }
  });

  return sorted;
};

const ListListener: FC = () => {
  const dispatch = useDispatch();

  const [cards] = useCollectionData<Card>(firestore.collection(`lists/OqhrgZIOBO6ElhcEXXEf/cards`), {
    idField: 'id',
  });
  const [cardList] = useDocumentData<CardList>(firestore.doc(`lists/OqhrgZIOBO6ElhcEXXEf`));

  if (cards && cardList) {
    dispatch(todoListSlice.actions.setCards(sortCards(cards, cardList.order)));
  }

  return <></>;
};

export default ListListener;
