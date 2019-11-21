import React, { Component, Fragment } from 'react';
import ApparelSection from './ApparelSection/ApparelSection';
import apparelService from '../../services/apparel-service';

class WomenApparel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      womenApparel: []
    };
  }

  async componentDidMount() {
    this.setState({
      womenApparel: await apparelService.loadAll('women')
    });
  }

  render() {
    const { womenApparel } = this.state;

    return (
      <Fragment>
        {this.state.womenApparel.length ? (
          <ApparelSection sectionName="Women" apparel={womenApparel} apparelType="women" />
        ) : (
          <div className="loading-div"></div>
        )}
      </Fragment>
    )
  }
}

export default WomenApparel;