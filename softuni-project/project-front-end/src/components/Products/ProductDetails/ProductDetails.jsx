import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import apparelService from '../../../services/apparel-service';
import cartService from '../../../services/cart-service';
import './ProductDetails.css';

const ProductDetails = ({ match, history, isLogged, isAdmin }) => {

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const apparelType = match.path.split('/')[2];
      const apparelId = match.params.id;
      setProduct(await apparelService.loadOne(apparelType, apparelId));
    };
    fetchProduct();
  }, [match.params.id, match.path]);

  if (!Object.keys(product).length) {
    return (<div className="loading-div"></div>);
  }

  const handleClick = async () => {
    await cartService.addToCart({ name: product.name, price: product.price });
    history.push('/user/cart');
    toast.success('Item successfully added to your cart!');
  };

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
            <p><span className="bolder-text">Price: </span><br /> <span className="span-price">${product.price}</span></p>
            {isLogged && !isAdmin ? (<Link onClick={handleClick} to="" className="btn card-btn">Add to Cart</Link>) : null}
            {isLogged && isAdmin ? (
              <Fragment>
                <Link onClick={handleClick} to="" className="btn card-btn">Edit</Link>
                <Link onClick={handleClick} to="" className="btn card-btn delete-btn">Delete</Link>
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