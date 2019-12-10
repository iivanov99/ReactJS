import React, { useState, useCallback } from 'react';
import * as yup from 'yup';

import userService from '../../../services/user-service';
import redirectWithNotification from '../../../utils/redirect-with-notification';
import handleErrors from '../../../utils/handle-errors';

import './RegisterForm.css';

const schema = yup.object().shape({
  email: yup.string()
    .required('Email is required!')
    .email('Email is not valid!'),
  username: yup.string()
    .required('Username is required!')
    .min(4, 'Username must be atleast 4 symbols!')
    .max(12, 'Username must not exceed 12 symbols!'),
  password: yup.string()
    .required('Password is required!')
    .min(8, 'Password must be atleast 8 symbols!')
    .max(12, 'Password must not exceed 12 symbols!'),
  rePassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords don\'t match!')
    .required('Repeat password is required!')
});

const RegisterForm = ({ history }) => {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const handleFormSubmit = useCallback(async (ev) => {
    ev.preventDefault();

    try {
      await schema.validate({ email, username, password, rePassword }, { abortEarly: false });
      await userService.register({ email, username, password, rePassword });
      redirectWithNotification(history, '/user/login', 'success', 'Registered successfully!');
    } catch (err) {
      handleErrors(err);
    }
  }, [email, history, password, rePassword, username]);

  return (
    <div className="row row-dark-grey row-register">
      <div className="col-md-12">
        <form onSubmit={handleFormSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input onChange={ev => setEmail(ev.target.value)} value={email}
              className="form-control" type="text" id="email" placeholder="Email" />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email adress with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input onChange={ev => setUsername(ev.target.value)} value={username}
              className="form-control" type="text" id="username" placeholder="Username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={ev => setPassword(ev.target.value)} value={password}
              className="form-control" type="password" id="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="rePassword">Repeat Password</label>
            <input onChange={ev => setRePassword(ev.target.value)} value={rePassword}
              className="form-control" type="password" id="rePassword" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary form-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;