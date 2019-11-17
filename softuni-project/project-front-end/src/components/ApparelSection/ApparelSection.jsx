import React, { Fragment } from 'react';
import ProductList from '../ProductList/ProductList';
import './ApparelSection.css';
import menApparel from '../../menApparel';

const ApparelSection = ({ sectionName }) => {
  return (
    <Fragment>
      <div class="row row-silver">
        <div class="col-md-6 col-apparel-heading">
          {
            sectionName.toLowerCase() !== 'accessories' ? (
              <h1><span class="underline">{sectionName}</span> Apparel</h1>
            ) : (
                <h1><span class="underline">{sectionName}</span></h1>
              )
          }
        </div>
        <div class="col-md-6 col-search">
          <input class="apparel-search" type="search" placeholder="Search..." />
        </div>
      </div>
      <ProductList apparel={menApparel} />
    </Fragment>
  );
};

export default ApparelSection;