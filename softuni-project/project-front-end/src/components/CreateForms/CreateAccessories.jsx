import React, { Fragment } from 'react';
import CreateFormHeading from './CreateFormHeading/CreateFormHeading';
import CreateForm from './CreateForm/CreateForm';

const CreateMens = () => {
  return (
    <Fragment>
      <CreateFormHeading formName="Accessories" />
      <CreateForm formName="Accessories"
        categoryOptions={['Hat', 'Workout Belt', 'Resistence Bands', 'Wristbands', 'Gloves', 'Other']} />
    </Fragment>
  );
};

export default CreateMens;