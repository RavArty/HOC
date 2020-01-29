import React from 'react';

const Users = ({ data }) => {
  return (
    <div className="block">
      <h1>Users</h1>
      {data.map(user => {
        <h2>{user.name}</h2>;
      })}
    </div>
  );
};

export default Users;
