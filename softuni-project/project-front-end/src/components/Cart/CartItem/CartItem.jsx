import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import cartService from '../../../services/cart-service';
import './CartItem.css';

const CartItem = ({ _id, item, price, cartItems, setCartItems }) => {

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price);

  useEffect(() => {
    setTotal((quantity * price).toFixed(2));
  }, [quantity, price]);

  const handleRemoveClick = async () => {
    await cartService.deleteFromCart(_id);
    const updatedCartItems = cartItems.filter(({ _id: cartId }) => cartId !== _id);
    setCartItems(updatedCartItems);
    toast.success(`${item} removed from the cart`);
  };

  return (
    <tr>
      <td>{item}</td>
      <td>$ {price}</td>
      <td>
        <input
          onChange={ev => setQuantity(ev.target.value)} value={quantity}
          className="cart-input" type="number" min="1" max="10" />
      </td>
      <td>$ {total}</td>
      <td>
        <FontAwesomeIcon onClick={handleRemoveClick} className="fa-times-icon rm-cart-item-btn" icon={faTimes} size="2x" />
      </td>
    </tr>
  );
};

export default CartItem;