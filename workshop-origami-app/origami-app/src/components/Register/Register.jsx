import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className="Register">
      <h1>Register Page</h1>
      <form>
        <div className="form-control">
          <label htmlFor="emailInput">Email</label>
          <input type="email" />
        </div>
        <div className="form-control">
          <label htmlFor="passwordInput">Password</label>
          <input type="password" />
        </div>
        <div className="form-control">
          <label htmlFor="repeatPasswordInput">Re-Password</label>
          <input type="password" />
        </div>
        <div className="form-control">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;