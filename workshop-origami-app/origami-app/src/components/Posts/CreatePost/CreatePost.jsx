import React, { useState } from 'react';
import Posts from '../Posts';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import './CreatePost.css';

const schema = yup.object().shape({
  description: yup.string()
    .required('Description is required')
    .min(25, 'Description must be atleast 25 symbols!')
    .max(250, 'Description must not exceed 250 symbols!')
});

const CreatePost = () => {

  const [description, setDescription] = useState('');

  const handleClick = async () => {
    try {
      await schema.validate({ description }, { abortEarly: false });
      toast.dismiss();
      toast.success('Input is correct!');
    } catch (err) {
      toast.dismiss();
      err.inner.forEach(innerErr => toast.error(innerErr.message));
    }
  };

  return (
    <div className="Input">
      <div>
        <h1>Share your thoughts</h1>
        <textarea onChange={ev => setDescription(ev.target.value)} value={description}></textarea>
        <button onClick={handleClick}>Post</button>
      </div>
      <div>
        <h2>Last 3 post on your wall</h2>
        <Posts limit={3} />
      </div>
    </div>
  )
};

export default CreatePost;