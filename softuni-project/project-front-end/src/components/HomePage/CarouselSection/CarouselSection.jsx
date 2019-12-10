import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import CarouselJumbotron from '../CarouselJumbotron/CarouselJumbotron';

import { UserContext } from '../../ContextWrapper/ContextWrapper';
import carouselImg1 from '../../../images/car-img-1.jpg';
import carouselImg2 from '../../../images/car-img-2.jpg';
import carouselImg3 from '../../../images/car-img-3.jpg';

import './CarouselSection.css';

const CarouselSection = () => {

  const { isLogged } = useContext(UserContext);

  return (
    <Fragment>
      <CarouselJumbotron />
      <div className="row carousel-row">
        <div className="col-md-12">
          <Carousel indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-100 c-img"
                src={carouselImg1}
                alt="First slide"
              />
              {!isLogged ? (<div className="carousel-caption d-none d-md-block">
                <Link to="/user/register"><button type="button" className="btn btn-orange">Join Us</button></Link>
                <h5 className="curousel-heading">Become a member of our awesome community!</h5>
              </div>) : null}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 c-img"
                src={carouselImg2}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 c-img"
                src={carouselImg3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </Fragment>
  )
};

export default CarouselSection;