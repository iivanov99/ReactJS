import React, { Component } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import userService from '../../../services/user-service';
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
    .min(4, 'Password must be atleast 4 symbols!')
    .max(12, 'Password must not exceed 12 symbols!'),
  rePassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords don\'t match!')
    .required('Repeat password is required!')
});

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      rePassword: ''
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
      await userService.register(this.state);

      this.props.history.push('/user/login');
      toast.dismiss();
      toast.success('Registered successfuly!');
    } catch (err) {
      toast.dismiss();

      if (err.inner) {
        err.inner.forEach(innerErr => toast.error(innerErr.message));
        return;
      }

      toast.error(err.message);
    }
  }


  render() {
    const { email, username, password, rePassword } = this.state;

    return (
      <div className="row row-dark-grey row-register">
        <div className="col-md-12">
          <form onSubmit={this.handleFormSubmit} className="register-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input onChange={this.handleInputChange} className="form-control" value={email}
                type="text" name="email" id="email" placeholder="Email" />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email adress with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input onChange={this.handleInputChange} className="form-control" value={username}
                type="text" name="username" id="username" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input onChange={this.handleInputChange} className="form-control" value={password}
                type="password" name="password" id="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="rePassword">Repeat Password</label>
              <input onChange={this.handleInputChange} className="form-control" value={rePassword}
                type="password" name="rePassword" id="rePassword" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary form-btn">Register</button>
          </form>
        </div>
      </div>
    );
  }
};

export default RegisterForm;