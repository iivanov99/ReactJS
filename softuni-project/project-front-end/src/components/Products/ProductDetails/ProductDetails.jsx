import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import apparelService from '../../../services/apparel-service';
import cartService from '../../../services/cart-service';

import './ProductDetails.css';

const ProductDetails = ({ match, history, isLogged, isAdmin }) => {

  const apparelType = match.path.split('/')[2];
  const apparelId = match.params.id;
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      setProduct(await apparelService.loadOne(apparelType, apparelId));
    })();
  }, [apparelId, apparelType, match.params.id, match.path]);

  const handleAddToCartClick = useCallback(async (ev) => {
    ev.preventDefault();
    await cartService.addToCart({ name: product.name, price: product.price });
    history.push('/user/cart');
    toast.success('Item successfully added to your cart!');
  }, [history, product.name, product.price]);

  const handleDeleteClick = useCallback(async (ev) => {
    ev.preventDefault();
    const apparelType = match.path.split('/')[2];
    const apparelId = match.params.id;
    await apparelService.delete(apparelType, apparelId);
    history.push(`/apparel/${apparelType}`);
    toast.dismiss();
    toast.success(`${product.name} deleted successfuly!`);
  }, [history, match.params.id, match.path, product.name]);

  if (!Object.keys(product).length) {
    return (<div className="loading-div"></div>);
  }

  return (
    <Fragment>
      <div className="row details-heading row-silver">
        <div className="col-md-12 text-center">
          <h2>Product <span className="underline">Info</span></h2>
        </div>
      </div>

      <div className="row row-silver row-details content-loaded">
        <div className="col"></div>
        <div className="col-md-3">
          <img src={product.imageUrl} alt={product.name} className="img-fluid img-details" />
        </div>
        <div className="col-md-3">
          <div className="product-details">
            <h2 className="product-heading">{product.name}</h2>
            <p>
              <span className="bolder-text">Product Description: </span>
              {product.description}
            </p>
            <p><span className="bolder-text">Category:</span> {product.category}</p>
            <p><span className="bolder-text">Size</span>: {product.size}</p>
            <p><span className="bolder-text">Ordered: </span> {product.ordersCount} times</p>
            <p><span className="bolder-text">Price: </span><br /><span className="span-price">${product.price}</span></p>
            {isLogged && !isAdmin ? (<Link onClick={handleAddToCartClick} to="" className="btn card-btn">Add to Cart</Link>) : null}
            {isLogged && isAdmin ? (
              <Fragment>
                <Link to={`/apparel/edit/${apparelType}/${product._id}`} className="btn card-btn">Edit</Link>
                <Link to="" onClick={handleDeleteClick} className="btn card-btn delete-btn">Delete</Link>
              </Fragment>
            ) : null}
          </div>
        </div>
        <div className="col"></div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;