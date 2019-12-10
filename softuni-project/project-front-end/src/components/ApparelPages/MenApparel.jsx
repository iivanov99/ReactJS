import React, { Fragment, useState, useEffect } from 'react';

import ApparelSection from './ApparelSection/ApparelSection';
import apparelService from '../../services/apparel-service';

const MenApparel = ({ history }) => {

  const [menApparel, setMenApparel] = useState([]);

  useEffect(() => {
    (async () => {
      setMenApparel(await apparelService.loadAll('men'));
    })();
  }, []);

  return (
    <Fragment>
      {menApparel.length ? (
        <ApparelSection apparelType="men" apparel={menApparel}
          setApparel={setMenApparel} history={history} />
      ) : (
        <div className="loading-div"></div>
      )}
    </Fragment>
  )
}

export default MenApparel;