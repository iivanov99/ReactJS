import React, { Fragment } from 'react';

import CartHead from '../CartHead/CartHead';
import CartItem from '../CartItem/CartItem';
import CheckoutButton from '../CheckoutButton/CheckoutButton';

import './CartItems.css';

const Cart = () => {
  return (
    <Fragment>
      <div class="row row-silver">
        <div class="col-md-12">
          <h1 class="cart-heading"><span class="underline">Cart</span></h1>
        </div>
      </div>

      <div class="row row-silver row-cart">
        <div class="col-md-12">
          <table class="table">
            <CartHead />
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