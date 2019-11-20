import React, { Component, Fragment } from 'react';
import ApparelSection from '../ApparelSection/ApparelSection';
import menApparel from '../../../menApparel';

class MenApparel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menApparel: []
    };
  }

  componentDidMount() {
    this.setState({ menApparel });
  }

  render() {
    const { menApparel } = this.state;

    return (
      <Fragment>
        <ApparelSection sectionName="Men" apparel={menApparel} />
      </Fragment>
    )
  }
}

export default MenApparel;