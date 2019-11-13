import React from 'react';
import './PostAuthor.css';

const PostAuthor = ({ author }) => {
  return (
    <div>
      <span>
        <small>Author: </small>
        {author}
      </span>
    </div>
  );
};

export default PostAuthor;