import React, { Fragment, Component } from 'react';

import ApparelHeading from '../ApparelHeading/ApparelHeading';
import ProductList from '../../Products/ProductList/ProductList';

import menApparel from '../../../menApparel'
// import womenApparel from '../../../womenApparel';
import accessories from '../../../accessories';

class MostPopularSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menApparel: [],
      womenApparel: [],
      accessories: []
    };
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:8080/api/apparel/women');
    const womenApparel = await res.json();
    
    this.setState({
      menApparel,
      womenApparel,
      accessories
    });
  }

  render() {
    const { menApparel, womenApparel, accessories } = this.state;

    return (
      <Fragment>
        <div className="row row-silver">
          <div className="col-md-12 text-center">
            <h1>Most <span className="underline">Popular</span></h1>
          </div>
        </div>

        <ApparelHeading name="Men Apparel" />
        <ProductList apparel={menApparel} />

        <ApparelHeading name="Women Apparel" />
        <ProductList apparel={womenApparel} />

        <ApparelHeading name="Accessories" />
        <ProductList apparel={accessories} />
      </Fragment>
    );
  }
}

export default MostPopularSection;