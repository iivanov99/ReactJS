import React, { Fragment, useState, useEffect } from 'react';
import ApparelSection from './ApparelSection/ApparelSection';
import apparelService from '../../services/apparel-service';

const WomenApparel = ({ history }) => {

  const [womenApparel, setWomenApparel] = useState([]);

  useEffect(() => {
    (async () => {
      setWomenApparel(await apparelService.loadAll('women'));
    })();
  }, []);

  return (
    <Fragment>
      {womenApparel.length ? (
        <ApparelSection apparelType="women" apparel={womenApparel}
          setApparel={setWomenApparel} history={history} />
      ) : (
        <div className="loading-div"></div>
      )}
    </Fragment>
  )
}

export default WomenApparel;