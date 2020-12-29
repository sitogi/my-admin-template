/** @jsx jsx */
import React, { FC } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { jsx } from '@emotion/react';
import PageHeader from 'components/organisms/PageHeader/PageHeader';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarSlice } from 'features/sidebar';
import { RootState } from 'store';

const PageHeaderContainer: FC = () => {
  const dispatch = useDispatch();
  const visible = useSelector<RootState, boolean>((state) => state.sidebar.visible);
  const { setVisible } = sidebarSlice.actions;

  return <PageHeader menuVisible={visible} menuButtonClicked={() => dispatch(setVisible(!visible))} />;
};

export default PageHeaderContainer;
