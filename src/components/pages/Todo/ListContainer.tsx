import React, { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import update from 'immutability-helper';
import firebase, { firestore } from 'firebase/instances';
import { RootState } from 'store';
import { Card } from 'features/todoList';
import List from 'components/pages/Todo/List';

const ListContainer: FC = () => {
  const cards = useSelector<RootState, Card[]>((state) => state.todoList.cards);

  const moveCard = useCallback(
    async (dragIndex: number, hoverIndex: number) => {
      const dragCard = cards[dragIndex];
      const afterMoved = update(cards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      });

      // TODO: Firestore traffic optimization
      const docRef = firestore.doc(`lists/OqhrgZIOBO6ElhcEXXEf`);
      await docRef.update({ order: afterMoved.map((c) => c.id) }); // eslint-disable-line import/no-named-as-default-member
    },
    [cards],
  );

  const addCard = async () => {
    const addedCardRef = await firestore.collection('lists/OqhrgZIOBO6ElhcEXXEf/cards').add({ text: '' });
    const docRef = firestore.doc(`lists/OqhrgZIOBO6ElhcEXXEf`);
    await docRef.update({ order: firebase.firestore.FieldValue.arrayUnion(addedCardRef.id) }); // eslint-disable-line import/no-named-as-default-member
  };

  return <List listTitle="TODO" cards={cards} addCardClicked={addCard} moveCard={moveCard} />;
};

export default ListContainer;
