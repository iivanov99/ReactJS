import React, { Fragment, Component } from 'react';
import ProductList from '../../Products/ProductList/ProductList';
import ApparelSectionHeading from './ApparelSectionHeading';
import './ApparelSection.css';

class ApparelSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      apparelToDisplay: props.apparel
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(ev) {
    const filteredApparel = this.props.apparel.filter(a =>
      a.name.toLowerCase().includes(ev.target.value.toLowerCase()));

    this.setState({
      searchValue: ev.target.value,
      apparelToDisplay: filteredApparel
    });
  }

  render() {
    const { searchValue, apparelToDisplay } = this.state;
    const { sectionName, apparelType } = this.props;

    return (
      <Fragment>
        <div className="row row-silver">
          <ApparelSectionHeading name={sectionName} />
          <div className="col-md-6 col-search">
            <input
              onChange={this.handleInputChange}
              className="apparel-search"
              type="search"
              placeholder="Search..."
              value={searchValue} />
          </div>
        </div>
        <ProductList apparel={apparelToDisplay} apparelType={apparelType} />
      </Fragment>
    );
  }
}

export default ApparelSection;