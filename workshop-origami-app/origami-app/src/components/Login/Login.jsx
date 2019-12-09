import React, { useState, useCallback } from 'react';
import * as yup from 'yup';

import userService from '../../services/user-service';
import redirectWithNotification from '../../utils/redirect-with-notification';
import handleErrors from '../../utils/handle-errors';

import './Login.css';

const schema = yup.object().shape({
  username: yup.string()
    .required('Username is required!')
    .min(4, 'Username must be atleast 4 symbols!')
    .max(12, 'Username must not exceed 12 symbols!'),
  password: yup.string()
    .required('Password is required!')
    .min(8, 'Password must be atleast 8 symbols!')
});

const Login = ({ setIsLogged, history }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = useCallback(async (ev) => {
    ev.preventDefault();

    try {
      await schema.validate({ username, password }, { abortEarly: false });
      await userService.login({ username, password });
      setIsLogged(true);
      redirectWithNotification(history, '/', 'Logged in successfully!');
    } catch (err) {
      handleErrors(err);
    }
  }, [history, password, setIsLogged, username]);

  return (
    <div className="Login">
      <h1>Login Page</h1>
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
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;