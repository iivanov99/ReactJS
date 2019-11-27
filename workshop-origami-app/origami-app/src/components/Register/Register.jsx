import React, { Component } from 'react';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import userService from '../../services/user-service';
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

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      rePassword: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  async handleSubmit(ev) {
    ev.preventDefault();

    try {
      await schema.validate(this.state, { abortEarly: false });
      await userService.register(this.state);

      this.props.history.push('/user/login');
      toast.dismiss();
      toast.success('Registered successfully!');
    } catch (err) {
      toast.dismiss();
      err.inner.forEach(innerErr => {
        toast.error(innerErr.message);
      });
    }
  }

  render() {
    const { username, password, rePassword } = this.state;

    return (
      <div className="Register" >
        <h1>Register Page</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-control">
            <label htmlFor="usernameInput">Username</label>
            <input onChange={this.handleChange} value={username} name="username" type="text" />
          </div>
          <div className="form-control">
            <label htmlFor="passwordInput">Password</label>
            <input onChange={this.handleChange} value={password} name="password" type="password" />
          </div>
          <div className="form-control">
            <label htmlFor="repeatPasswordInput">Re-Password</label>
            <input onChange={this.handleChange} value={rePassword} name="rePassword" type="password" />
          </div>
          <div className="form-control">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;