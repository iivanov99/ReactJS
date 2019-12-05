import React, { Fragment, useState, useEffect } from 'react';
import ApparelSection from './ApparelSection/ApparelSection';
import apparelService from '../../services/apparel-service';

const WomenApparel = ({ history, isLogged, isAdmin }) => {

  const [womenApparel, setWomenApparel] = useState([]);

  useEffect(() => {
    (async () => {
      setWomenApparel(await apparelService.loadAll('women'));
    })();
  }, []);

  return (
    <Fragment>
      {womenApparel.length ? (
        <ApparelSection sectionName="Women" apparel={womenApparel} apparelType="women"
          history={history} isLogged={isLogged} isAdmin={isAdmin} />
      ) : (
        <div className="loading-div"></div>
      )}
    </Fragment>
  )
}

export default WomenApparel;