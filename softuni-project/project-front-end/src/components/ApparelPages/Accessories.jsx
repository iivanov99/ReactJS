import React, { Fragment, useState, useEffect } from 'react';
import ApparelSection from './ApparelSection/ApparelSection';
import apparelService from '../../services/apparel-service';

const Accessories = ({ history }) => {

  const [accessories, setAccessories] = useState([]);

  const fetchAccessories = async () => {
    setAccessories(await apparelService.loadAll('accessories'));
  };

  useEffect(() => {
    fetchAccessories();
  }, []);

  return (
    <Fragment>
      {accessories.length ? (
        <ApparelSection sectionName="Accessories" apparel={accessories} apparelType="accessories" history={history} />
      ) : (
        <div className="loading-div"></div>
      )}
    </Fragment>
  );
};

export default Accessories;