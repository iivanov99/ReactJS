import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import cartService from '../../../services/cart-service';

import './CheckoutButton.css';

const CheckoutButton = ({ cartItems, history }) => {

  const handleCheckoutClick = useCallback(async (ev) => {
    ev.preventDefault();
    await cartService.checkout(cartItems);
    history.push('/user/orders');
    toast.success('Checkout was successful!');
  }, [cartItems, history]);

  return (
    <div className="row row-silver checkout-row">
      <div className="col-md-12 checkout-col">
        <Link onClick={handleCheckoutClick} className="btn checkout-btn" to="">Checkout</Link>
      </div>
    </div>
  );
};

export default CheckoutButton;