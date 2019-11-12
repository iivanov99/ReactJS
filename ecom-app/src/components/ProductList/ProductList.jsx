import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import Header from '../Header/Header';
import './product-list.css';

const ProductList = ({ products }) => {
  return (
    <Fragment>
      <Header />
      <div className="container">
        {products.map((product, index) => <ProductCard key={index} {...product} />)}
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