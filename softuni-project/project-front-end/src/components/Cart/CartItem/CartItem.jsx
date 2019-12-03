import React from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import cartService from '../../../services/cart-service';
import './CartItem.css';

const CartItem = ({ _id, item, price, date, cartItems, setCartItems }) => {

  const handleRemoveClick = async () => {
    await cartService.deleteFromCart(_id);
    const updatedCartItems = cartItems.filter(({ _id: cartId }) => cartId !== _id);
    setCartItems(updatedCartItems);
    toast.success(`${item} removed from the cart`);
  };

  return (
    <tr>
      <td>{date}</td>
      <td>{item}</td>
      <td>$ {price}</td>
      <td>
        <FontAwesomeIcon onClick={handleRemoveClick}
          className="fa-times-icon rm-cart-item-btn" icon={faTimes} size="2x" />
      </td>
    </tr>
  );
};

export default CartItem;