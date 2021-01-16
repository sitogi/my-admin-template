import React, { FC, Fragment } from 'react';
import Board from './Board';
import ListListener from './ListListener';

const BoardContainer: FC = () => {
  return (
    <Fragment>
      <ListListener />
      <Board />
    </Fragment>
  );
};

export default BoardContainer;
