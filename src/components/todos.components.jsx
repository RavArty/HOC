import React from 'react';

const Todos = ({ data }) => {
  return (
    <div className="block">
      <h1>Todos</h1>
      {data.map(todo => {
        <h2>{todo.title}</h2>;
      })}
    </div>
  );
};

export default Todos;
