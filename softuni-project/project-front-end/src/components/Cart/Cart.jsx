import React, { Fragment } from 'react';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
  return (
    <Fragment>
      <div class="row row-silver">
        <div class="col-md-12">
          <h1 class="cart-heading"><span class="underline">Cart</span></h1>
        </div>
      </div>

      <div class="row row-silver row-table">
        <div class="col-md-12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <CartItem
                item="Whey Protein"
                price="100"
              />
              <CartItem
                item="Creatin Monohydrate"
                price="34"
              />
            </tbody>
          </table>
        </div>
      </div>

      <div class="row row-silver checkout-row">
        <div class="col-md-12 checkout-col">
          <a href="#checkout" class="btn checkout-btn">Checkout</a>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;