import React, { Fragment } from 'react';
import './Register.css';

const Register = () => {
  return (
    <Fragment>
      <div className="row row-dark-grey row-register-heading">
        <div className="col-md-12 col-register">
          <h1><span className="underline">Register</span></h1>
        </div>
      </div>

      <div className="row row-dark-grey row-register">
        <div className="col-md-12">
          <form className="register-form">
            <div className="form-group">
              <label htmlFor="emailInput">Email</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email adress with anyone
              else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="usernameInput">Username</label>
              <input type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="passwordInput">Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="rePasswordInput">Repeat Password</label>
              <input type="rePassword" className="form-control" placeholder="Password" />
            </div>

            <button type="submit" className="btn btn-primary form-btn">Register</button>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default Register;