import React, { useState } from 'react';
import * as yup from 'yup';

import userService from '../../services/user-service';
import redirectWithNotification from '../../utils/redirect-with-notification';
import handleErrors from '../../utils/handle-errors';

import './Register.css';

const schema = yup.object().shape({
  username: yup.string()
    .required('Username is required!')
    .min(4, 'Username must be atleast 4 symbols!')
    .max(12, 'Username must not exceed 12 symbols!'),
  password: yup.string()
    .required('Password is required!')
    .min(8, 'Password must be atleast 8 symbols!'),
  rePassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords don\'t match!')
    .required('Re-password is required!')
});

const Register = ({ history }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();

    try {
      await schema.validate({ username, password, rePassword }, { abortEarly: false });
      await userService.register({ username, password });
      redirectWithNotification(history, '/user/login', 'Registered successfully!');
    } catch (err) {
      handleErrors();
    }
  };

  return (
    <div className="Register" >
      <h1>Register Page</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-control">
          <label htmlFor="usernameInput">Username</label>
          <input onChange={ev => setUsername(ev.target.value)} value={username} type="text" />
        </div>
        <div className="form-control">
          <label htmlFor="passwordInput">Password</label>
          <input onChange={ev => setPassword(ev.target.value)} value={password} type="password" />
        </div>
        <div className="form-control">
          <label htmlFor="repeatPasswordInput">Re-Password</label>
          <input onChange={ev => setRePassword(ev.target.value)} value={rePassword} type="password" />
        </div>
        <div className="form-control">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;