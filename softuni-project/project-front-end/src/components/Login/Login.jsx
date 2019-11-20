import React, { Fragment } from 'react';
import './Login.css';

const Login = () => {
  return (
    <Fragment>
      <div className="row row-dark-grey row-login-heading">
        <div className="col-md-12 col-login">
          <h1><span className="underline">Login</span></h1>
        </div>
      </div>

      <div className="row row-dark-grey row-login">
        <div className="col-md-12">
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="emailInput">Email</label>
              <input type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="passwordInput">Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary form-btn">Login</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;