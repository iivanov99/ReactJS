import React, { Fragment, useState, useEffect } from 'react';

import EditFormHeading from './EditFormHeading/EditFormHeading';
import EditForm from './EditForm/EditForm';
import apparelService from '../../services/apparel-service';

const EditApparel = ({ match, history }) => {

  const apparelType = match.path.split('/')[3];
  const apparelId = match.params.id;
  const [apparel, setApparel] = useState({});

  useEffect(() => {
    (async () => {
      const apparelDate = await apparelService.loadOne(apparelType, apparelId);
      setApparel(apparelDate);
    })();
  }, [apparelId, apparelType]);

  if (!Object.keys(apparel).length) {
    return (<div className="loading-div"></div>);
  }

  return (
    <Fragment>
      <EditFormHeading formName={apparelType.charAt(0).toUpperCase() + apparelType.slice(1)} />
      {apparelType === 'men' ? (
        <EditForm formName="Men" history={history} apparel={apparel}
          categoryOptions={['T-Shirt', 'Tank Top', 'Long Sleeve Shirt', 'Hoodie', 'Pants', 'Shorts', 'Other']} />
      ) : null}
      {apparelType === 'women' ? (
        <EditForm formName="Women" history={history} apparel={apparel}
          categoryOptions={['Leggings', 'Shorts', 'Long Sleeve Shirt', 'Top', 'Bra', 'Hoodie', 'Crop Hoodie', 'Tank', 'Other']} />
      ) : null}
      {apparelType === 'accessories' ? (
        <EditForm formName="Accessories" history={history} apparel={apparel}
          categoryOptions={['Hat', 'Workout Belt', 'Resistence Bands', 'Wristbands', 'Gloves', 'Other']} />
      ) : null}
    </Fragment>
  );
};

export default EditApparel;