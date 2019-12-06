import React, { Fragment } from 'react';
import CreateFormHeading from './CreateFormHeading/CreateFormHeading';
import CreateForm from './CreateForm/CreateForm';

const CreateMens = ({ history }) => {
  return (
    <Fragment>
      <CreateFormHeading formName="Women" />
      <CreateForm formName="Women"
        categoryOptions={['Leggings', 'Shorts', 'Long Sleeve Shirt', 'Top', 'Bra', 'Hoodie', 'Crop Hoodie', 'Tank', 'Other']}
        history={history} />
    </Fragment>
  );
};

export default CreateMens;