import React from 'react';
import Post from '../Post/Post';
import './Posts.css';

const Posts = () => {
  return(
    <div className="Posts">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
};

export default Posts;