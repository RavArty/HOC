import React from 'react';

const Posts = ({ data }) => {
  return (
    <div className="block">
      <h1>Posts</h1>
      {data.map(post => {
        <h2>{post.title}</h2>;
      })}
    </div>
  );
};

export default Posts;
