import React, { Component, Fragment } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './product-list.css';
import data from '../../data';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isDark: false,
      ownerName: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isDark: !this.state.isDark
    })
  }

  componentDidMount() {
    this.setState({
      products: data
    });
  }

  render() {
    const { ownerName, isDark, products } = this.state;
    const themeClass = isDark ? 'darkContainer' : 'container';

    if (!products.length) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <Fragment>
        <div>
          {ownerName}
        </div>
        <button onClick={this.handleClick}>Toggle Dark Theme</button>
        <div className={themeClass}>
          {products.map(({ id, title, price, brand, image }) => (
            <ProductCard
              key={id} id={id} title={title}
              price={price} brand={brand} image={image}
            />
          ))}
        </div>
      </Fragment>
    )
  }
}

export default ProductList;