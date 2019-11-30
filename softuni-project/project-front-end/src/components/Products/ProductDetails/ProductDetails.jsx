import React, { Fragment, useState, useEffect } from 'react';
import apparelService from '../../../services/apparel-service';
import './ProductDetails.css';

const ProductDetails = ({ match }) => {

  const [product, setProduct] = useState({});

  const fetchProduct = async () => {
    const apparelType = match.path.split('/')[2];
    const apparelId = match.params.id;
    setProduct(await apparelService.loadOne(apparelType, apparelId));
  };

  useEffect(() => {
    fetchProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <p><span className="bolder-text">Price: </span><br /> <span className="span-price">${product.price}</span></p>
            <a href="#add-to-cart" className="btn card-btn">Add to Cart</a>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;