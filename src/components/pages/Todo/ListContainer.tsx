import React, { FC } from 'react';
import { useCollectionData } from '@lukaselmer/react-firebase-hooks/firestore';
import firebase, { firestore } from 'firebase/instances';
import List from 'components/pages/Todo/List';

// interface CardList {
//   id: string;
//   order: string[];
// }

interface Card {
  id: string;
  text: string;
}

const ListContainer: FC = () => {
  const [cards, cardLoading, cardError] = useCollectionData<Card>(
    firestore.collection(`lists/OqhrgZIOBO6ElhcEXXEf/cards`),
    {
      idField: 'id',
    },
  );
  // const [listDoc] = useDocumentData<CardList>(firestore.doc(`lists/OqhrgZIOBO6ElhcEXXEf`));

  // const moveCard = useCallback(
  //   (dragIndex: number, hoverIndex: number) => {
  //     if (!cards || !displayedCards) {
  //       return;
  //     }
  //     const dragCard = displayedCards[dragIndex];
  //     setDisplayedCards(
  //       update(displayedCards, {
  //         $splice: [
  //           [dragIndex, 1],
  //           [hoverIndex, 0, dragCard],
  //         ],
  //       }),
  //     );
  //   },
  //   [cards],
  // );

  const moveCard = (dragIndex: number, hoverIndex: number) => {
    console.log(dragIndex, hoverIndex);
  };

  const addCard = async () => {
    const addedCardRef = await firestore.collection('lists/OqhrgZIOBO6ElhcEXXEf/cards').add({ text: '' });
    const docRef = firestore.doc(`lists/OqhrgZIOBO6ElhcEXXEf`);
    await docRef.update({ order: firebase.firestore.FieldValue.arrayUnion(addedCardRef.id) });
  };

  if (cardError) {
    console.log('card loading error');

    return <div />;
  }

  if (!cards || cardLoading) {
    return <div />;
  }

  // TODO: sort cards

  return <List listTitle="TODO" cards={cards} addCardClicked={addCard} moveCard={moveCard} />;
};

export default ListContainer;
