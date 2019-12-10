import React, { Fragment } from 'react';
import CarouselSection from './CarouselSection/CarouselSection';
import MostPopularSection from './MostPopularSection/MostPopularSection';

const HomePage = ({ history }) => {
  return (
    <Fragment>
      <CarouselSection />
      <MostPopularSection history={history} />
    </Fragment>
  );
};

export default HomePage;