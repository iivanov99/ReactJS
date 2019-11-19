import React from 'react';
import AllPosts from '../../Posts/AllPosts/AllPosts';
import './CreatePost.css';

const CreatePost = () => {
  return (
    <div className="Input">
      <div>
        <h1>Share your thoughts</h1>
        <textarea></textarea>
        <button>Post</button>
      </div>
      <div>
        <h2>Last 3 post on your wall</h2>
        <AllPosts limit={3}/>
      </div>
    </div>
  );
};

export default CreatePost;