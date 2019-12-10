import React, { Fragment, useState, useCallback, useEffect } from 'react';

import ProductList from '../../Products/ProductList';
import ApparelSectionHeading from './ApparelSectionHeading';

import './ApparelSection.css';

const ApparelSection = ({ apparelType, apparel, history, setApparel }) => {

  const [searchValue, setSearchValue] = useState('');
  const [apparelToDisplay, setApparelToDisplay] = useState(apparel);

  useEffect(() => {
    setApparelToDisplay(apparel);
  }, [apparel]);

  const handleSearchInputChange = useCallback(ev => {
    const searchedApparel = apparel.filter(apparelItem =>
      apparelItem.name.toLowerCase().includes(ev.target.value.toLowerCase()));
    setSearchValue(ev.target.value);
    setApparelToDisplay(searchedApparel);
  }, [apparel]);

  return (
    <Fragment>
      <div className="row row-silver">
        <ApparelSectionHeading name={apparelType.charAt(0).toUpperCase() + apparelType.slice(1)} />
        <div className="col-md-6 col-search">
          <input className="apparel-search" onChange={handleSearchInputChange}
            type="search" placeholder="Search..." value={searchValue} />
        </div>
      </div>
      <ProductList apparel={apparelToDisplay} apparelType={apparelType}
        history={history} setApparel={setApparel} forMainPage={false} />
    </Fragment>
  );
};

export default ApparelSection;