import React, { Component, Fragment } from 'react';
import ApparelSection from '../ApparelSection/ApparelSection';
import womenApparel from '../../../womenApparel';

class WomenApparel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      womenApparel: []
    };
  }

  componentDidMount() {
    this.setState({ womenApparel });
  }

  render() {
    const { womenApparel } = this.state;

    return (
      <Fragment>
        <ApparelSection sectionName="Women" apparel={womenApparel} />
      </Fragment>
    )
  }
}

export default WomenApparel;