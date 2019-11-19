import React from 'react';
import Posts from '../Posts/AllPosts/AllPosts';
import './Main.css';

const Main = () => {
  return (
    <main className="Main">
      <h1>Posts</h1>
      <Posts />
    </main>
  );
};

export default Main;