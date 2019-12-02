import React, { Fragment } from 'react';
import UserOrdersHeading from './UserOrdersHeading/UserOrdersHeading';
import UserOrder from './UserOrder';
import './UserOrders.css';

const UserOrders = () => {
  return (
    <Fragment>
      <UserOrdersHeading />
      <div class="row row-silver row-orders">
        <div class="col-md-12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Total Cost</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <UserOrder name="Whey Protein" date="15.05.2018" price="99.99" status="Pending" />
              <UserOrder name="Creatin Monohydarate" date="21.03.2018" price="35.97" status="Accepted" />
              <UserOrder name="L Glutamine" date="02.07.2019" price="33.99" status="Declined" />
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default UserOrders;