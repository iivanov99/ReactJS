import React, { Fragment } from 'react';

import LoginHeading from './LoginHeading/LoginHeading';
import LoginForm from './LoginForm/LoginForm';

const Login = ({ history, changeLoggedState }) => {
  return (
    <Fragment>
      <LoginHeading />
      <LoginForm history={history} changeLoggedState={changeLoggedState} />
    </Fragment>
  );
};

export default Login;