import React from 'react';

const Posts = ({ data }) => {
  return (
    <div className="block">
      <h1>Posts</h1>
      {data.map(user => {
        <h2>{user.name}</h2>;
      })}
    </div>
  );
};

export default Posts;
