import React from 'react';
import './CartHead.css'

const CartHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">Item</th>
        <th scope="col">Price</th>
        <th scope="col">Quantity</th>
        <th scope="col">Total</th>
      </tr>
    </thead>
  );
};

export default CartHead;