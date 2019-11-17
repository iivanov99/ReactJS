import React, { Fragment } from 'react';
import ProductList from '../ProductList/ProductList';
import menApparel from '../../menApparel';
import womenApparel from '../../womenApparel';
import accessories from '../../accessories';
import './MostPopularSection.css';

const MostPopularSection = (props) => {
  return (
    <Fragment>
      <div class="row row-silver">
        <div class="col-md-12 text-center">
          <h1>Most <span class="underline">Popular</span></h1>
        </div>
      </div>

      <div class="row row-silver">
        <h2 class="apparel-heading">Men Apparel</h2>
      </div>
      <ProductList apparel={menApparel}/>

      <div class="row row-silver">
        <h2 class="apparel-heading">Women Apparel</h2>
      </div>
      <ProductList apparel={womenApparel}/>

      <div class="row row-silver">
        <h2 class="apparel-heading">Accessories</h2>
      </div>
      <ProductList apparel={accessories}/>
    </Fragment>
  );
};

export default MostPopularSection;