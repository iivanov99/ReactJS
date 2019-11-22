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
              <label htmlFor="email">Email</label>
              <input className="form-control" type="text" id="email"
                placeholder="Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="form-control" type="password" id="password"
                placeholder="Password" required />
            </div>
            <button type="submit" className="btn btn-primary form-btn">Login</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;