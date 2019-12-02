import React, { useState } from 'react';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import userService from '../../services/user-service';
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

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();

    try {
      await schema.validate({ username, password }, { abortEarly: false });
      await userService.login({ username, password });

      setIsLogged(true);
      history.push('/');

      toast.dismiss();
      toast.success('Logged in successfuly!');
    } catch (err) {
      toast.dismiss();

      if (err.inner) {
        err.inner.forEach(innerErr => toast.error(innerErr.message));
        return;
      }

      if (err.message === 'Unauthorized') {
        toast.error('Invalid username or password!');
      }
    }
  };

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