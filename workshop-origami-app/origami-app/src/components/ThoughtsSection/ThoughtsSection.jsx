import React from 'react';
import Post from '../Post/Post';
import './ThoughtsSection.css';

const ThoughtsSection = () => {
  return (
    <div className="Input">
      <div>
        <h1>Share your thoughts</h1>
        <textarea></textarea>
        <button>Post</button>
      </div>
      <div>
        <h2>Last 3 post on your wall</h2>
        <Post author="Ivko">asdasdasdasd</Post>
      </div>
    </div>
  );
};

export default ThoughtsSection;