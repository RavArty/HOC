import React from 'react';
import withSubscription from './withSubscription';

const Users = ({ data }) => {
  return (
    <div className="block">
      <h1>Users</h1>
      {data.map(user => {
        return <h2 key={user.id}>{user.name}</h2>;
      })}
    </div>
  );
};

export default withSubscription(Users);
