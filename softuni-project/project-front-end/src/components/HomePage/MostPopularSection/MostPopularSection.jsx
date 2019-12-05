import React, { Fragment, useState, useEffect } from 'react';
import ApparelHeading from '../ApparelHeading/ApparelHeading';
import ProductList from '../../Products/ProductList';
import apparelService from '../../../services/apparel-service';

const MostPopularSection = ({ isLogged, isAdmin, history }) => {

  const [menApparel, setMenApparel] = useState([]);
  const [womenApparel, setWomenApparel] = useState([]);
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    (async () => {
      const [men, women, acc] = await Promise.all([
        apparelService.loadAll('men', 4),
        apparelService.loadAll('women', 4),
        apparelService.loadAll('accessories', 4)
      ]);
      setMenApparel(men);
      setWomenApparel(women);
      setAccessories(acc);
    })();
  }, []);

  return (
    <Fragment>
      <div className="row row-silver">
        <div className="col-md-12 text-center">
          <h1>Most <span className="underline">Popular</span></h1>
        </div>
      </div>

      <ApparelHeading name="Men Apparel" />
      <ProductList apparel={menApparel} apparelType="men"
        isLogged={isLogged} isAdmin={isAdmin} history={history} />

      <ApparelHeading name="Women Apparel" />
      <ProductList apparel={womenApparel} apparelType="women"
        isLogged={isLogged} isAdmin={isAdmin} history={history} />

      <ApparelHeading name="Accessories" />
      <ProductList apparel={accessories} apparelType="accessories"
        isLogged={isLogged} isAdmin={isAdmin} history={history} />
    </Fragment>
  );
};

export default MostPopularSection;