import React from 'react';
import './EditFormHeading.css';

const EditFormHeading = ({ formName }) => {
  return (
    <div className="row row-dark-grey row-edit-form">
      {formName !== 'accessories' ? (
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

export default EditFormHeading;