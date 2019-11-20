import React, { Component, Fragment } from 'react';
import ApparelSection from '../ApparelSection/ApparelSection';
import apparelService from '../../../services/apparel-service';

class Accessories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessories: []
    };
  }

  async componentDidMount() {
    this.setState({
      accessories: await apparelService.loadAll('accessories')
    });
  }

  render() {
    const { accessories } = this.state;

    if (!this.state.accessories.length) {
      return (
        <div className="loading-div"></div>
      );
    }

    return (
      <Fragment>
        <ApparelSection sectionName="Accessories" apparel={accessories} apparelType="accessories" />
      </Fragment>
    )
  }
}

export default Accessories;