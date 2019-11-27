import React, { Component } from 'react';
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
      await userService.login(this.state);

      this.props.changeLoggedState(true);
      this.props.history.push('/');

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
  }

  render() {
    const { username, password } = this.state;

    return (
      <div className="Login">
        <h1>Login Page</h1>
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
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;