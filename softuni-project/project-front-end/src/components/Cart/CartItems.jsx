import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartHeading from './CartHeading/CartHeading';
import CartItem from './CartItem/CartItem';
import CheckoutButton from './CheckoutButton/CheckoutButton';
import cartService from '../../services/cart-service';
import './CartItems.css';

const Cart = () => {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    (async () => {
      const userCartItems = await cartService.loadAll();
      setCartItems(userCartItems);
    })();
  }, []);

  if (!cartItems.length) {
    return (
      <Fragment>
        <CartHeading />
        <div className="row row-silver">
          <div className="col-md-12 col-empty-cart">
            <h2 className="empty-cart-heading">There are currently no items in you cart...</h2>
            <Link to="/" className="btn empty-cart-btn">Go Shopping</Link>
          </div>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <CartHeading />
      <div className="row row-silver row-cart">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(({ _id, name, price }) =>
                <CartItem key={_id} _id={_id} item={name} price={price} setCartItems={setCartItems} cartItems={cartItems} />)}
            </tbody>
          </table>
        </div>
      </div>
      <CheckoutButton />
    </Fragment>
  );
};

export default Cart;