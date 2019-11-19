import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="Login">
      <h1>Login Page</h1>
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
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;