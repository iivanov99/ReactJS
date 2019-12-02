import React, { Fragment } from 'react';

import CartItem from './CartItem/CartItem';
import CheckoutButton from './CheckoutButton/CheckoutButton';

import './CartItems.css';

const Cart = () => {
  return (
    <Fragment>
      <div className="row row-silver">
        <div className="col-md-12">
          <h1 className="cart-heading"><span className="underline">Cart</span></h1>
        </div>
      </div>

      <div className="row row-silver row-cart">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <CartItem item="Whey Protein" price="100" />
              <CartItem item="Creatin Monohydrate" price="34" />
            </tbody>
          </table>
        </div>
      </div>
      <CheckoutButton />
    </Fragment>
  );
};

export default Cart;