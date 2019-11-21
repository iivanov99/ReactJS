import React, { Component, Fragment } from 'react';
import ApparelSection from './ApparelSection/ApparelSection';
import apparelService from '../../services/apparel-service';

class MenApparel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menApparel: []
    };
  }

  async componentDidMount() {
    this.setState({
      menApparel: await apparelService.loadAll('men')
    });
  }

  render() {
    const { menApparel } = this.state;

    return (
      <Fragment>
        {this.state.menApparel.length ? (
          <ApparelSection sectionName="Men" apparel={menApparel} apparelType="men" />
        ) : (
          <div className="loading-div"></div>
        )}
      </Fragment>
    )
  }
}

export default MenApparel;