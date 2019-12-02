import React, { Fragment } from 'react';

import LoginHeading from './LoginHeading/LoginHeading';
import LoginForm from './LoginForm/LoginForm';

const Login = ({ history, setIsLogged, setIsAdmin }) => {
  return (
    <Fragment>
      <LoginHeading />
      <LoginForm history={history} setIsLogged={setIsLogged} setIsAdmin={setIsAdmin} />
    </Fragment>
  );
};

export default Login;