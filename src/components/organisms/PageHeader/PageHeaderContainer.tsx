import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { PageTitle } from 'features/sidebar';
import PageHeader from 'components/organisms/PageHeader/PageHeader';

const PageHeaderContainer: FC = () => {
  const activePage = useSelector<RootState, PageTitle>((state) => state.sidebar.activePage);

  return <PageHeader activePageTitle={activePage} />;
};

export default PageHeaderContainer;
