import React, { Fragment } from 'react';
import CarouselSection from './CarouselSection/CarouselSection';
import MostPopularSection from './MostPopularSection/MostPopularSection';

const HomePage = () => {
  return (
    <Fragment>
      <CarouselSection />
      <MostPopularSection />
    </Fragment>
  );
};

export default HomePage;