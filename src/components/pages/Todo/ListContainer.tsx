import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import update from 'immutability-helper';
import firebase, { firestore } from 'firebase/instances';
import { RootState } from 'store';
import { Card } from 'features/todoList';
import List from 'components/pages/Todo/List';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

const ListContainer: FC = () => {
  const cards = useSelector<RootState, Card[]>((state) => state.todoList.cards);

  const onDragEnd = async (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const dragCard = cards[result.source.index];
    const reordered = update(cards, {
      $splice: [
        [result.source.index, 1],
        [result.destination.index, 0, dragCard],
      ],
    });

    const docRef = firestore.doc(`lists/OqhrgZIOBO6ElhcEXXEf`);
    await docRef.update({ order: reordered.map((c) => c.id) }); // eslint-disable-line import/no-named-as-default-member
  };

  const addCard = async () => {
    const addedCardRef = await firestore.collection('lists/OqhrgZIOBO6ElhcEXXEf/cards').add({ text: '' });
    const docRef = firestore.doc(`lists/OqhrgZIOBO6ElhcEXXEf`);
    await docRef.update({ order: firebase.firestore.FieldValue.arrayUnion(addedCardRef.id) }); // eslint-disable-line import/no-named-as-default-member
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <List listTitle="TODO" cards={cards} addCardClicked={addCard} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ListContainer;
