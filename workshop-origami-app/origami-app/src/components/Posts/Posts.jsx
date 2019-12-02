import React, { Fragment, useState, useEffect } from 'react';
import Post from './Post/Post';
import postService from '../../services/post-service';
import './Posts.css';

const Posts = ({ limit }) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const postsData = await postService.load(limit);
      setPosts(postsData);
    })();
  }, [limit]);

  return (
    <Fragment>
      {!posts.length ? (<div className="Posts">Loading...</div>) : (
        <div className="Posts">
          {posts.map(post => (
            <Post key={post._id} author={post.author.username}>{post.description}</Post>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default Posts;