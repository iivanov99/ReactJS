import React, { useCallback } from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import cartService from '../../../services/cart-service';
import './CartItem.css';

const CartItem = ({ _id, item, price, date, setCartItems }) => {

  const handleRemoveClick = useCallback(async () => {
    await cartService.deleteFromCart(_id);
    setCartItems(await cartService.loadAll());
    toast.error(`${item} removed from the cart`);
  }, [_id, item, setCartItems]);

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