import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserOrdersHeading from './UserOrdersHeading/UserOrdersHeading';
import UserOrder from './UserOrder';
import ordersService from '../../services/orders-service';
import './UserOrders.css';

const UserOrders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const ordersData = await ordersService.loadAll();
      setOrders(ordersData);
    })();
  }, []);

  if (!orders.length) {
    return (
      <Fragment>
        <UserOrdersHeading />
        <div className="row row-silver">
          <div className="col-md-12 col-empty-cart">
            <h2 className="empty-cart-heading">There are currently no orders from your account...</h2>
            <Link to="/" className="btn empty-cart-btn">Go Shopping</Link>
          </div>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <UserOrdersHeading />
      <div className="row row-silver row-orders">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Total Cost</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(({ _id, name, date, price, status }) =>
                <UserOrder key={_id} name={name} date={date} price={price} status={status} />)}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default UserOrders;