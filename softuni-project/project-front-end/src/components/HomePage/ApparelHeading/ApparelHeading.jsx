import React from 'react';
import './ApparelHeading.css';

const ApparelHeading = ({ name }) => {
  return (
    <div className="row row-silver">
      <h2 className="apparel-heading">{name}</h2>
    </div>
  );
};

export default ApparelHeading;