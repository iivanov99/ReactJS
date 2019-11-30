import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import './PendingOrder.css';

const PendingOrder = ({ name, date, price }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{date}</td>
      <td>$ {price}</td>
      <td>
        <FontAwesomeIcon className="fa-check-icon" icon={faCheck} size="lg" />
        <FontAwesomeIcon className="fa-times-icon" icon={faTimes} size="lg" />
      </td>
    </tr>
  );
};

export default PendingOrder;