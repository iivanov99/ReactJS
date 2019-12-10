import React, { Fragment, useState, useEffect } from 'react';
import ApparelSection from './ApparelSection/ApparelSection';
import apparelService from '../../services/apparel-service';

const Accessories = ({ history }) => {

  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    (async () => {
      setAccessories(await apparelService.loadAll('accessories'));
    })();
  }, []);

  return (
    <Fragment>
      {accessories.length ? (
        <ApparelSection apparelType="accessories" apparel={accessories} history={history} />
      ) : (
        <div className="loading-div"></div>
      )}
    </Fragment>
  );
};

export default Accessories;