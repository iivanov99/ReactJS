import React from 'react';
import './UserOrder.css';

const statusClass = {
  'Pending': 'pending-order',
  'Accepted': 'accepted-order',
  'Declined': 'declined-order'
};

const UserOrder = ({ name, date, price, status }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{date}</td>
      <td>$ {price}</td>
      <td>
        <p className={statusClass[status]}>{status}</p>
      </td>
    </tr>
  );
};

export default UserOrder;