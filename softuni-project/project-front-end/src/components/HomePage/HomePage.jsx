import React, { Fragment } from 'react';
import CarouselSection from './CarouselSection/CarouselSection';
import MostPopularSection from './MostPopularSection/MostPopularSection';

const HomePage = ({ isLogged, isAdmin, history }) => {
  return (
    <Fragment>
      <CarouselSection isLogged={isLogged} />
      <MostPopularSection history={history} isLogged={isLogged} isAdmin={isAdmin} />
    </Fragment>
  );
};

export default HomePage;