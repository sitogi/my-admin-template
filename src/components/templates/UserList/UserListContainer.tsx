import React, { FC, useEffect } from 'react';
import { callListAuthUsers } from 'firebase/instances';
import UserList from './UserList';

const UserListContainer: FC = () => {

  useEffect(() => {
    callListAuthUsers().then(result => console.log(result)).catch(e => console.log(e));
  }, []);

  return <UserList />;
};

export default UserListContainer;
