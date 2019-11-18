import React from 'react';
import PostAuthor from '../PostAuthor/PostAuthor';
import image from '../../images/blue-origami-bird.png'
import './Post.css';

const Post = ({ children, author }) => {
  return (
    <div className="Post">
      <img src={image} alt="Origami" />
      <p className="description">
        {children}
      </p>
      <PostAuthor author={author} />
    </div>
  );
};

export default Post;