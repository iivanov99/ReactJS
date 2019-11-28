import React, { Fragment } from 'react';
import CarouselSection from './CarouselSection/CarouselSection';
import MostPopularSection from './MostPopularSection/MostPopularSection';

const HomePage = ({ isLogged }) => {
  return (
    <Fragment>
      <CarouselSection isLogged={isLogged} />
      <MostPopularSection />
    </Fragment>
  );
};

export default HomePage;