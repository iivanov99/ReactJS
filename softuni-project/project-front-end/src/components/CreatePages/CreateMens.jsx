import React, { Fragment } from 'react';
import CreateFormHeading from './CreateFormHeading/CreateFormHeading';
import CreateForm from './CreateForm/CreateForm';

const CreateMens = ({ history }) => {
  return (
    <Fragment>
      <CreateFormHeading formName="Men" />
      <CreateForm formName="Men"
        categoryOptions={['T-Shirt', 'Tank Top', 'Long Sleeve Shirt', 'Hoodie', 'Pants', 'Shorts', 'Other']}
        history={history} />
    </Fragment>
  );
};

export default CreateMens;