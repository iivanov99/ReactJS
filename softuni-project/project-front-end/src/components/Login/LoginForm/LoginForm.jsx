import React, { Component } from 'react';
import { toast } from 'react-toastify';

import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  handleSubmit(ev) {
    ev.preventDefault();

    const { email, password } = this.state;

    const emailValidationErrors = this.getEmailValidation(email);
    const passwordValidationErrors = this.getPasswordValidation(password);

    if (!emailValidationErrors.length && !passwordValidationErrors.length) {
      this.props.history.push('/');
      toast.success('Successfuly logged in!');
      return
    }

    this.displayValidationErrors(emailValidationErrors.concat(passwordValidationErrors));
  }

  getEmailValidation(email) {
    const validationErrors = [];

    if (!email) {
      validationErrors.push('Email is required!');
    } else if (!email.includes('@')) {
      validationErrors.push('Invalid email!');
    } else if (email.length < 5) {
      validationErrors.push('Email must be atleast 5 symbols long!');
    }

    return validationErrors;
  }

  getPasswordValidation(password) {
    const validationErrors = [];

    if (!password) {
      validationErrors.push('Password is required!');
    } else if (password.length < 6) {
      validationErrors.push('Password must be atleast 6 symbols!');
    }

    return validationErrors;
  }

  displayValidationErrors(validationErrors) {
    validationErrors.forEach(err => toast.error(err));
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="row row-dark-grey row-login">
        <div className="col-md-12">
          <form onSubmit={this.handleSubmit} className="login-form">
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