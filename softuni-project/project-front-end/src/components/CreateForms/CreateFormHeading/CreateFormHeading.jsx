import React from 'react';
import './CreateFormHeading.css';

const CreateFormHeading = ({ formName }) => {
  return (
    <div className="row row-dark-grey row-create-form">
      {formName !== 'Accessories' ? (
        <div className="col-md-12 text-center">
          <h1><span className="underline">{formName}</span> Apparel</h1>
        </div>
      ) : (
        <div className="col-md-12 text-center">
          <h1><span className="underline">{formName}</span></h1>
        </div>
      )}
    </div>
  );
};

export default CreateFormHeading;