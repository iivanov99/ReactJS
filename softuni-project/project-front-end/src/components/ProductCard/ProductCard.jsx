import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import './ProductCard.css';

const ProductCard = ({ name, imageUrl, description, price }) => {
  return (
    <Fragment>
      <div className="col-md-3 card-col">
        <Card>
          <Card.Img
            variant="top"
            src={imageUrl}
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <div className="card-info">
              <p>Price: <br></br> <span className="span-price">${price}</span></p>
              <div className="card-buttons">
                <a href="#cart" className="btn card-btn">Add to Cart</a>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  )
};

export default ProductCard;