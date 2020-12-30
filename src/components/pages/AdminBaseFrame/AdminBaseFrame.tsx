import React, { FC, Fragment } from 'react';
import { Route, Switch } from 'react-router';
import { PATH_ROOT } from 'components/organisms/RouteManager/RouteManager';
import SidebarContainer from 'components/templates/Sidebar/SidebarContainer';
import PageHeader from 'components/organisms/PageHeader/PageHeader';

const DummyContent = () => (
  <div className="grid grid-cols-3 divide-x divide-green-500">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
);

const AdminBaseFrame: FC = () => {
  return (
    <Fragment>
      <div>
        <aside>
          <SidebarContainer />
        </aside>
        <main>
          <PageHeader />
          <div>
            <Switch>
              <Route exact path={PATH_ROOT} component={DummyContent} />
            </Switch>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default AdminBaseFrame;
