import React from 'react';
import './CheckoutButton.css';

const CheckoutButton = () => {
  return (
    <div className="row row-silver checkout-row">
      <div className="col-md-12 checkout-col">
        <a href="#checkout" className="btn checkout-btn">Checkout</a>
      </div>
    </div>
  );
};

export default CheckoutButton;