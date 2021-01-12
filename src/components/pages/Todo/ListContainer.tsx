import React, { FC, useCallback, useState } from 'react';
import update from 'immutability-helper';
import List from './List';

const ListContainer: FC = () => {
  const [cards, setCards] = useState([
    {
      id: '1',
      text: 'Write a cool JS library',
    },
    {
      id: '2',
      text: 'Make it generic enough',
    },
    {
      id: '3',
      text: 'Write README',
    },
    {
      id: '4',
      text: 'Create some examples',
    },
  ]);

  // カード移動時の処理
  // 多分ホバー中にめちゃくちゃレンダリングされるから、 useCallback を使ったり update を使ったりして負荷を減らしてる
  const moveCard = useCallback(
    // ドラッグしたアイテムのインデックスと、現在ホバー中の位置にあるインデックス？
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = cards[dragIndex];
      // ドラッグしたカードとホバー中のインデックスの位置からアイテム配列の順序を並び替えている
      // update に関しては、おそらく新規配列をわざわざ作成してから置き換える、ということを省けるライブラリなのだろう
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        }),
      );
    },
    [cards],
  );

  const addCard = () => {
    const newCards = cards.slice();
    newCards.push({ id: `${cards.length + 1}`, text: '' });
    setCards(newCards);
  };

  return <List listTitle="TODO" cards={cards} addCardClicked={addCard} moveCard={moveCard} />;
};

export default ListContainer;
