import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    }
  }

  componentDidMount() {
    const product = data.find(item =>
      item.id === Number(this.props.match.params.id));
    this.setState({ product });
  }

  render() {
    const { product } = this.state;

    if (!Object.keys(product).length) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <Fragment>
        <div>
          Product Page - {product.title}
          <div>
            <Link to="/">
              Go back to homepage
          </Link>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ProductDetails;