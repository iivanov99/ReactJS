import React, { Fragment } from 'react';

import LoginHeading from './LoginHeading/LoginHeading';
import LoginForm from './LoginForm/LoginForm';

const Login = ({ history }) => {
  return (
    <Fragment>
      <LoginHeading />
      <LoginForm history={history} />
    </Fragment>
  );
};

export default Login;