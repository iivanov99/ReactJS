import React from 'react';
import './CheckoutButton.css';

const CheckoutButton = () => {
  return (
    <div class="row row-silver checkout-row">
      <div class="col-md-12 checkout-col">
        <a href="#checkout" class="btn checkout-btn">Checkout</a>
      </div>
    </div>
  );
};

export default CheckoutButton;