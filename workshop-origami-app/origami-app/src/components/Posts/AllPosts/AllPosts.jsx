import React, { Component } from 'react';
import Post from '../Post/Post';
import postService from '../../../services/post-service';
import './AllPosts.css';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    const posts = await postService.load(this.props.limit);
    this.setState({
      posts
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
          <Post key={post._id} author={post.author.username}>{post.description}</Post>
        ))}
      </div>
    );
  }
}

export default Posts;