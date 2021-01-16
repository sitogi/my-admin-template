import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import update from 'immutability-helper';
import firebase, { firestore } from 'firebase/instances';
import { RootState } from 'store';
import { Card, todoListSlice } from 'features/todoList';
import List from 'components/pages/Todo/List';

const ListContainer: FC = () => {
  const dispatch = useDispatch();
  const cards = useSelector<RootState, Card[]>((state) => state.todoList.cards);

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = cards[dragIndex];
      dispatch(
        todoListSlice.actions.setCards(
          update(cards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          }),
        ),
      );
    },
    [cards, dispatch],
  );

  const addCard = async () => {
    const addedCardRef = await firestore.collection('lists/OqhrgZIOBO6ElhcEXXEf/cards').add({ text: '' });
    const docRef = firestore.doc(`lists/OqhrgZIOBO6ElhcEXXEf`);
    await docRef.update({ order: firebase.firestore.FieldValue.arrayUnion(addedCardRef.id) }); // eslint-disable-line import/no-named-as-default-member
  };

  return <List listTitle="TODO" cards={cards} addCardClicked={addCard} moveCard={moveCard} />;
};

export default ListContainer;
