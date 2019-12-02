import React, { Fragment, useState, useEffect } from 'react';
import ApparelSection from './ApparelSection/ApparelSection';
import apparelService from '../../services/apparel-service';

const WomenApparel = ({ history }) => {

  const [womenApparel, setWomenApparel] = useState([]);

  const fetchWomenApparel = async () => {
    setWomenApparel(await apparelService.loadAll('women'));
  };

  useEffect(() => {
    fetchWomenApparel();
  }, []);

  return (
    <Fragment>
      {womenApparel.length ? (
        <ApparelSection sectionName="Women" apparel={womenApparel} apparelType="women" history={history} />
      ) : (
        <div className="loading-div"></div>
      )}
    </Fragment>
  )
}

export default WomenApparel;