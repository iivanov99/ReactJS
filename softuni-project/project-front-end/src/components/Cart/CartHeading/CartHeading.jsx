import React from 'react';
import './CartHeading.css';

const CartHeading = () => {
  return (
    <div className="row row-silver">
      <div className="col-md-12">
        <h1 className="cart-heading"><span className="underline">Cart</span></h1>
      </div>
    </div>
  );
};

export default CartHeading;