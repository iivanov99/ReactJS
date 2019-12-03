import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CartHeading from './CartHeading/CartHeading';
import CartItem from './CartItem/CartItem';
import CheckoutButton from './CheckoutButton/CheckoutButton';
import cartService from '../../services/cart-service';

import './CartItems.css';

const CartItems = ({ history }) => {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    (async () => {
      const userCartItems = await cartService.loadAll();
      setCartItems(userCartItems);
    })();
  }, []);

  return (
    <Fragment>
      <CartHeading />
      {!cartItems.length ? (
        <div className="row row-silver">
          <div className="col-md-12 col-empty-cart">
            <h2 className="empty-cart-heading">There are currently no items in you cart...</h2>
            <Link to="/" className="btn empty-cart-btn">Go Shopping</Link>
          </div>
        </div>
      ) : (
        <Fragment>
          <div className="row row-silver row-cart">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Item name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(({ _id, name, price, date }) =>
                    <CartItem key={_id} _id={_id} item={name} price={price} date={date}
                      setCartItems={setCartItems} />)}
                </tbody>
              </table>
            </div>
          </div>
          <CheckoutButton cartItems={cartItems} history={history} />
        </Fragment>
        )}
    </Fragment>
  );
};

export default CartItems;