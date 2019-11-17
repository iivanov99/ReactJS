import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './CarouselHeader.css';

const CarouselHeader = () => {
  return (
    <div className="row row-absolute">
      <div className="col-sm-7 offset-1">
        <Jumbotron className="jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Welcome to Forever<span className="deep-orange-text">Lean</span></h1>
            <p className="lead">
              World's top class fitness apparel store! The perfect place for people looking for comforable, sweat proof,
              high quality men and women apparel as well as awesome and unique accessories!
            </p>
          </div>
        </Jumbotron>
      </div>
    </div>
  );
};

export default CarouselHeader;