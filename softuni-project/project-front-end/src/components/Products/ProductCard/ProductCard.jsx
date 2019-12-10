import React, { Fragment, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { toast } from 'react-toastify';

import cartService from '../../../services/cart-service';
import apparelService from '../../../services/apparel-service';
import redirectWithNotification from '../../../utils/redirect-with-notification';

import './ProductCard.css';

const ProductCard = ({ apparelType, product, isLogged, isAdmin, history, setApparel, forMainPage }) => {

  const { _id, name, price, imageUrl, description } = product;

  const handleAddToCartClick = useCallback(async (ev) => {
    ev.preventDefault();
    await cartService.addToCart({ name, price });
    history.push('/user/cart');
    toast.success(`${name} successfully added to your cart!`);
  }, [history, name, price]);

  const handleDeleteClick = useCallback(async (ev) => {
    ev.preventDefault();
    await apparelService.delete(apparelType, _id);

    if (forMainPage) {
      setApparel(await apparelService.loadAll(apparelType, 4));
      redirectWithNotification(history, '/', 'error', `${name} removed from the shop!`);
      return;
    }

    setApparel(await apparelService.loadAll(apparelType));
    redirectWithNotification(history, `/apparel/${apparelType}`, 'error', `${name} removed from the shop!`);
  }, [_id, apparelType, forMainPage, history, name, setApparel]);

  return (
    <Fragment>
      <div className="col-md-3 card-col">
        <Card className="content-loaded">
          <Link to={`/apparel/${apparelType}/${_id}`}><Card.Img variant="top" src={imageUrl} /></Link>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <div className="card-info">
              <p>Price: <br></br> <span className="span-price">${price}</span></p>
              <div className="card-buttons">
                {isLogged && !isAdmin ? (<Link onClick={handleAddToCartClick} to="" className="btn card-btn">Add to Cart</Link>) : null}
                {isLogged && isAdmin ? (
                  <Fragment>
                    <Link to={`/apparel/edit/${apparelType}/${_id}`} className="btn card-btn">Edit</Link>
                    <Link to="" onClick={handleDeleteClick} className="btn card-btn delete-btn">Delete</Link>
                  </Fragment>
                ) : null}
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  )
};

export default ProductCard;