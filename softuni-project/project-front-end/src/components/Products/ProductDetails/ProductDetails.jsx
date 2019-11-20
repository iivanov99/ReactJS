import React, { Component, Fragment } from 'react';
import apparelService from '../../../services/apparel-service';
import './ProductDetails.css';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
  }

  async componentDidMount() {
    const apparelType = this.props.match.path.split('/')[2];
    const apparelId = this.props.match.params.id;
    this.setState({
      product: await apparelService.loadOne(apparelType, apparelId)
    });
  }

  render() {
    const { product } = this.state;

    if (!Object.keys(product).length) {
      return (
        <div className="loading-div"></div>
      );
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
              <p><span className="bolder-text">Ordered: </span> {product.orderCount}</p>
              <p><span className="bolder-text">Price: </span><br /> <span className="span-price">${product.price}</span></p>
              <a href="#add-to-cart" className="btn card-btn">Add to Cart</a>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </Fragment>
    );
  };
}

export default ProductDetails;