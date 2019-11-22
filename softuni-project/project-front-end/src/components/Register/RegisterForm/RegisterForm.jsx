import React, { Component } from 'react';
import './RegisterForm.css';
import { toast } from 'react-toastify';

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

  handleFormSubmit(ev) {
    ev.preventDefault();

    const passwordValidationErrors = this.getPasswordValidation();

    if (!passwordValidationErrors.length) {
      this.props.history.push('/user/login');
      toast.success('Account created successfully!');
      return;
    }

    this.displayValidationErrors(passwordValidationErrors);
  }

  getPasswordValidation() {
    const { password, rePassword } = this.state;
    const validationErrors = []

    if (!password.length || !rePassword.length) {
      validationErrors.push('Password fields are required!');
    } else if (password !== rePassword) {
      validationErrors.push('Both passwords must match!');
    } else if (password.length < 6) {
      validationErrors.push('Password must be atleast 6 symbols long!')
    }

    return validationErrors;
  }

  displayValidationErrors(validationErrors) {
    validationErrors.forEach(err => toast.error(err));
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