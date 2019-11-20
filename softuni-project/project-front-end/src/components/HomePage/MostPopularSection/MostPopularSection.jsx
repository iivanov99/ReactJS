import React, { Fragment, Component } from 'react';
import ApparelHeading from '../ApparelHeading/ApparelHeading';
import ProductList from '../../Products/ProductList/ProductList';
import apparelService from '../../../services/apparel-service';

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
    this.setState({
      menApparel: await apparelService.loadAll('men', 4),
      womenApparel: await apparelService.loadAll('women', 4),
      accessories: await apparelService.loadAll('accessories', 4)
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
        <ProductList apparel={menApparel} apparelType="men"/>

        <ApparelHeading name="Women Apparel" />
        <ProductList apparel={womenApparel} apparelType="women"/>

        <ApparelHeading name="Accessories" />
        <ProductList apparel={accessories} apparelType="accessories"/>
      </Fragment>
    );
  }
}

export default MostPopularSection;