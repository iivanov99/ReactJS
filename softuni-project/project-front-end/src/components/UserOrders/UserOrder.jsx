import React from 'react';

const UserOrder = ({ name, date, price, status }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{date}</td>
      <td>$ {price}</td>
      <td>{status}</td>
    </tr>
  );
};

export default UserOrder;