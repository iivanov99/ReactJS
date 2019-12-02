import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PendingOrdersHeading from './PendingOrdersHeading';
import PendingOrder from './PendingOrder/PendingOrder';
import ordersService from '../../services/orders-service';

const PendingOrders = () => {

  const [pendingOrders, setPendingOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const pendingOrdersData = await ordersService.loadAll();
      console.log(pendingOrdersData);
      setPendingOrders(pendingOrdersData);
    })();
  }, []);

  if (!pendingOrders.length) {
    return (
      <Fragment>
        <PendingOrdersHeading />
        <div className="row row-silver">
          <div className="col-md-12 col-empty-cart">
            <h2 className="empty-cart-heading">There are currently no pending orders...</h2>
            <Link to="/" className="btn empty-cart-btn">Home</Link>
          </div>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <PendingOrdersHeading />
      <div className="row row-silver row-orders">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">User</th>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Total Cost</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingOrders.map(({ _id, name, price, date, creatorId }) =>
                <PendingOrder key={_id} name={name} date={date} price={price} user={creatorId.username} />)}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default PendingOrders;