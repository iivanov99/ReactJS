import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AuthContext } from '../ContextWrapper/ContextWrapper';
import './product-price.css';

class ProductPrice extends Component {
  static contextType = AuthContext;

  render() {
    return (
      <div>
        <p className="product-price">
          Price: <span>{this.props.price}$</span>
        </p>
        {this.context.auth ? (
          <p>You have <br /> 10% discount!</p>
        ) : null}
      </div>
    );
  }
};

ProductPrice.defaultProps = {
  price: 0
};

ProductPrice.propTypes = {
  price: PropTypes.number.isRequired
};

export default ProductPrice;