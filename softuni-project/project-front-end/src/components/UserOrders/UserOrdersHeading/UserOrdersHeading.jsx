import React from 'react';
import './UserOrdersHeading.css';

const UserOrdersHeading = () => {
  return (
    <div className="row row-silver">
      <div className="col-md-12">
        <h1 className="orders-heading">My <span className="underline">Orders</span></h1>
      </div>
    </div>
  );
};

export default UserOrdersHeading;