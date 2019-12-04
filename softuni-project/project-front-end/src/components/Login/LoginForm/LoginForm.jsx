import React, { useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import userService from '../../../services/user-service';
import './LoginForm.css';

const schema = yup.object().shape({
  email: yup.string()
    .required('Email is required!')
    .email('Email is not valid!'),
  password: yup.string()
    .required('Password is required!')
    .min(8, 'Password must be atleast 8 symbols!')
    .max(12, 'Password must not exceed 12 symbols!')
});

const LoginForm = ({ history, setIsLogged, setIsAdmin }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();

    try {
      await schema.validate({ email, password }, { abortEarly: false });
      const user = await userService.login({ email, password });
      setIsLogged(true);
      setIsAdmin(user.role === 'admin');
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
        toast.error('Invalid email or password!');
      }
    }
  };

  return (
    <div className="row row-dark-grey row-login">
      <div className="col-md-12">
        <form onSubmit={handleFormSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input onChange={ev => setEmail(ev.target.value)} value={email}
              className="form-control" type="text" id="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={ev => setPassword(ev.target.value)} value={password}
              className="form-control" type="password" id="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary form-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;