import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import './product-list.css';
import data from '../../data';

const ProductList = ({ products }) => {
  return (
    <Fragment>
      <div className="container">
        {data.map((product, index) => <ProductCard key={index} {...product} />)}
      </div>
    </Fragment>
  );
};

ProductList.defaultProps = {
  products: []
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductList;