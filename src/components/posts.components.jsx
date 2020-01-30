import React from 'react';
import withSubscription from './withSubscription';

const Posts = ({ data }) => {
  return (
    <div className="block">
      <h1>Posts</h1>
      {data.map(post => (
        <h2 key={post.id}>{post.title}</h2>
      ))}
    </div>
  );
};

export default withSubscription(Posts);
