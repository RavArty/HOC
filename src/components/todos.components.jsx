import React from 'react';

const Todos = ({ data }) => {
  return (
    <div className="block">
      <h1>Todos</h1>
      {data.map(user => {
        <h2>{user.name}</h2>;
      })}
    </div>
  );
};

export default Todos;
