import React, { Fragment } from 'react';

import RegisterHeading from './RegisterHeading/RegisterHeading';
import RegisterForm from './RegisterForm/RegisterForm';

const Register = ({ history }) => {
  return (
    <Fragment>
      <RegisterHeading />
      <RegisterForm history={history} />
    </Fragment>
  )
}

export default Register;