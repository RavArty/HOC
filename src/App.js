import React from 'react';
import Users from './components/users.components';
import Todos from './components/todos.components';
import Posts from './components/posts.components';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Users url="https://jsonplaceholder.typicode.com/users" />
      <Todos url="https://jsonplaceholder.typicode.com/todos" />
      <Posts url="https://jsonplaceholder.typicode.com/posts" />
    </div>
  );
};

export default App;
