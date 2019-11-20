import React, { Fragment } from 'react';
import ProductList from '../../Products/ProductList/ProductList';
import './ApparelSection.css';

const ApparelSection = ({ sectionName, apparel }) => {
  return (
    <Fragment>
      <div className="row row-silver">
        <div className="col-md-6 col-apparel-heading">
          {
            sectionName.toLowerCase() !== 'accessories' ? (
              <h1><span className="underline">{sectionName}</span> Apparel</h1>
            ) : (
                <h1><span className="underline">{sectionName}</span></h1>
              )
          }
        </div>
        <div className="col-md-6 col-search">
          <input className="apparel-search" type="search" placeholder="Search..." />
        </div>
      </div>
      <ProductList apparel={apparel} />
    </Fragment>
  );
};

export default ApparelSection;