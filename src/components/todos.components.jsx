import React from 'react';
import withSubscription from './withSubscription';

const Todos = ({ data }) => {
  return (
    <div className="block">
      <h1 className="header">Todos</h1>
      {data.map(todo => (
        <h2 key={todo.id}>{todo.title}</h2>
      ))}
    </div>
  );
};

export default withSubscription(Todos);
