import React, { Component } from 'react';
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
    .min(4, 'Password must be atleast 4 symbols!')
    .max(12, 'Password must not exceed 12 symbols!')
});

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  async handleFormSubmit(ev) {
    ev.preventDefault();

    try {
      await schema.validate(this.state, { abortEarly: false });
      await userService.login(this.state);

      //TODO: change global isLogged state
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
        toast.error('Invalid email or password!');
      }
    }
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="row row-dark-grey row-login">
        <div className="col-md-12">
          <form onSubmit={this.handleFormSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input onChange={this.handleInputChange} className="form-control" value={email}
                type="text" name="email" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input onChange={this.handleInputChange} className="form-control" value={password}
                type="password" name="password" id="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary form-btn">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;