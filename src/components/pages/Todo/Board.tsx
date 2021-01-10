/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useCallback, FC } from 'react';
import { jsx, css } from '@emotion/react';
import update from 'immutability-helper';
import { Button, Text } from '@chakra-ui/react';
import Card from './Card';

const listBaseCss = css`
  width: 350px;
  padding: 20px;
  background-color: lightgreen;
  border-radius: 10px;
`;
const listHeaderCss = css`
  width: 90%;
  padding: 10px 10px 10px 3px;
  margin: auto auto auto 0;
`;
const listContentsCss = css`
  padding: 20px;
`;
const addButtonCss = css`
  width: 60%;
  margin: 0 auto;
`;

// カードの中身を表す interface
export interface Item {
  id: number;
  text: string;
}

// このコンポーネントの State を表す interface
export interface ContainerState {
  cards: Item[];
}

// ごく普通の関数コンポーネント
const Board: FC = () => {
  // state の初期値に Item のリストを書いている
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

  const renderCard = (card: { id: string; text: string }, index: number) => {
    return <Card key={card.id} index={index} id={card.id} text={card.text} moveCard={moveCard} />;
  };

  const addCard = () => {
    const newCards = cards.slice();
    newCards.push({ id: `${cards.length + 1}`, text: '' });
    setCards(newCards);
  };

  return (
    <div>
      <div css={listBaseCss}>
        <div css={listHeaderCss}>
          <Text size="big" color="green">
            TODO List
          </Text>
        </div>
        <div css={listContentsCss}>{cards.map((card, i) => renderCard(card, i))}</div>
        <div css={addButtonCss}>
          <Button fluid color="blue" onClick={addCard}>
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Board;
