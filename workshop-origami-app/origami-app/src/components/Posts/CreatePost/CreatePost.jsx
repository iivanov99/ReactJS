import React, { Component } from 'react';
import AllPosts from '../../Posts/AllPosts/AllPosts';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import './CreatePost.css';

const schema = yup.object().shape({
  description: yup.string()
    .required('Description is required')
    .min(25, 'Description must be atleast 25 symbols!')
    .max(250, 'Description must not exceed 250 symbols!')
});
class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(ev) {
    this.setState({
      description: ev.target.value
    });
  }

  async handleClick() {
    try {
      await schema.validate(this.state, { abortEarly: false });
      toast.dismiss();
      toast.success('Input is correct!');
    } catch (err) {
      toast.dismiss();
      err.inner.forEach(innerErr => {
        toast.error(innerErr.message);
      });
    }
  }

  render() {
    return (
      <div className="Input">
        <div>
          <h1>Share your thoughts</h1>
          <textarea onChange={this.handleChange} value={this.state.description}></textarea>
          <button onClick={this.handleClick}>Post</button>
        </div>
        <div>
          <h2>Last 3 post on your wall</h2>
          <AllPosts limit={3} />
        </div>
      </div>
    );
  }
}

export default CreatePost;