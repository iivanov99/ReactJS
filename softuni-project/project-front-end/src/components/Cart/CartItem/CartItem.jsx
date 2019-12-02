import React, { useState, useEffect } from 'react';
import './CartItem.css';

const CartItem = ({ item, price }) => {

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price);

  useEffect(() => {
    setTotal((quantity * price).toFixed(2));
  }, [quantity, price]);

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
    </tr>
  );
};

export default CartItem;