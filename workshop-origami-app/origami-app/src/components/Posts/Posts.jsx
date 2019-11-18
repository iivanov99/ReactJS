import React, { Component } from 'react';
import Post from '../Post/Post';
import './Posts.css';
import postService from '../../services/post-service';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    const posts = await postService.load();
    const topFivePosts = posts.slice(0, 5);
    this.setState({
      posts: topFivePosts
    });
  }

  render() {
    const { posts } = this.state;

    if (!posts.length) {
      return (
        <div className="Posts">
          Loading...
        </div>
      );
    }

    return (
      <div className="Posts">
        {posts.map(post => (
          <Post key={post.id} author={post.title}>{post.body}</Post>
        ))}
      </div>
    );
  }
}

export default Posts;