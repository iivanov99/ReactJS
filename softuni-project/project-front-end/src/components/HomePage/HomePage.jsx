import React, { Fragment } from 'react';
import CarouselSection from './CarouselSection/CarouselSection';
import MostPopularSection from './MostPopularSection/MostPopularSection';

const HomePage = ({ isLogged, history }) => {
  return (
    <Fragment>
      <CarouselSection isLogged={isLogged} />
      <MostPopularSection history={history} />
    </Fragment>
  );
};

export default HomePage;