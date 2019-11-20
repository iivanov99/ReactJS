import React from 'react';

const ApparelSectionHeading = ({ name }) => {
  return (
    <div className="col-md-6 col-apparel-heading">
      {
        name.toLowerCase() !== 'accessories' ? (
          <h1><span className="underline">{name}</span> Apparel</h1>
        ) : (
            <h1><span className="underline">{name}</span></h1>
          )
      }
    </div>
  );
};

export default ApparelSectionHeading;