import React, { Fragment } from 'react';
import PendingOrdersHeading from './PendingOrdersHeading';
import PendingOrder from './PendingOrder/PendingOrder';

const PendingOrders = () => {
  return (
    <Fragment>
      <PendingOrdersHeading />
      <div className="row row-silver row-orders">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Total Cost</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <PendingOrder name="Whey Protein" date="26.02.2019" price="99.99" />
              <PendingOrder name="Creatin Monohydrate" date="21.03.2018" price="36" />
              <PendingOrder name="L Glutamine" date="16.03.2019" price="45" />
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default PendingOrders;