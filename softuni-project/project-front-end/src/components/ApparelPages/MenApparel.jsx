import React, { Fragment, useState, useEffect } from 'react';
import ApparelSection from './ApparelSection/ApparelSection';
import apparelService from '../../services/apparel-service';

const MenApparel = ({ history, isLogged, isAdmin }) => {

  const [menApparel, setMenApparel] = useState([]);

  const fetchMenApparel = async () => {
    setMenApparel(await apparelService.loadAll('men'));
  };

  useEffect(() => {
    fetchMenApparel();
  }, []);

  return (
    <Fragment>
      {menApparel.length ? (
        <ApparelSection sectionName="Men" apparel={menApparel} apparelType="men"
        history={history} isLogged={isLogged} isAdmin={isAdmin} />
      ) : (
        <div className="loading-div"></div>
      )}
    </Fragment>
  )
}

export default MenApparel;