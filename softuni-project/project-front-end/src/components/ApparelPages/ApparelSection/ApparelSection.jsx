import React, { Fragment, useState } from 'react';
import ProductList from '../../Products/ProductList';
import ApparelSectionHeading from './ApparelSectionHeading';
import './ApparelSection.css';

const ApparelSection = ({ sectionName, apparel, apparelType, history }) => {

  const [searchValue, setSearchValue] = useState('');
  const [apparelToDisplay, setApparelToDisplay] = useState(apparel);

  const handleSearchInputChange = (ev) => {
    const searchedApparel = apparel.filter(apparelItem =>
      apparelItem.name.toLowerCase().includes(ev.target.value.toLowerCase()))
    setSearchValue(ev.target.value);
    setApparelToDisplay(searchedApparel);
  };

  return (
    <Fragment>
      <div className="row row-silver">
        <ApparelSectionHeading name={sectionName} />
        <div className="col-md-6 col-search">
          <input className="apparel-search" onChange={handleSearchInputChange}
            type="search" placeholder="Search..." value={searchValue} />
        </div>
      </div>
      <ProductList apparel={apparelToDisplay} apparelType={apparelType} history={history} />
    </Fragment>
  );
};

export default ApparelSection;