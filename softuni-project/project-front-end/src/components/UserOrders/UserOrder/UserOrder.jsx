import React from 'react';
import './UserOrder.css';

const UserOrder = ({ name, date, price, status }) => {
  let statusClassName = 'status';

  if (status === 'Accepted') {
    statusClassName += ' accepted-order';
  } else if (status === 'Declined') {
    statusClassName += ' declined-order';
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{date}</td>
      <td>$ {price}</td>
      <td>
        <p className={statusClassName}>{status}</p>
      </td>
    </tr>
  );
};

export default UserOrder;