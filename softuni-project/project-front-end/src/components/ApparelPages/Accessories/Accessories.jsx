import React, { Component, Fragment } from 'react';
import ApparelSection from '../ApparelSection/ApparelSection';
import accessories from '../../../accessories';


class Accessories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessories: []
    };
  }

  componentDidMount() {
    this.setState({ accessories });
  }

  render() {
    const { accessories } = this.state;

    return (
      <Fragment>
        <ApparelSection sectionName="Accessories" apparel={accessories} />
      </Fragment>
    )
  }
}

export default Accessories;