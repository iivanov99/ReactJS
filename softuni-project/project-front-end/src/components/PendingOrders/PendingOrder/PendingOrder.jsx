import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

import orderService from '../../../services/order-service';

import './PendingOrder.css';

const PendingOrder = ({ _id, user, name, date, price, setPendingOrders }) => {

  const handleAcceptClick = async () => {
    await orderService.changeStatus('Accepted', _id);
    setPendingOrders(await orderService.loadAll());
    toast.success(`${name} order accepted!`);
  };

  const handleDeclineClick = async () => {
    await orderService.changeStatus('Declined', _id);
    setPendingOrders(await orderService.loadAll());
    toast.error(`${name} order declined!`);
  };

  return (
    <tr>
      <td>{user}</td>
      <td>{name}</td>
      <td>{date}</td>
      <td>$ {price}</td>
      <td>
        <FontAwesomeIcon onClick={handleAcceptClick} className="fa-check-icon" icon={faCheck} size="lg" />
        <FontAwesomeIcon onClick={handleDeclineClick} className="fa-times-icon" icon={faTimes} size="lg" />
      </td>
    </tr>
  );
};

export default PendingOrder;