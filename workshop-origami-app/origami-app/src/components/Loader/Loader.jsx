import React, { Fragment } from 'react';

const Loader = ({ isLoading}) => {
  return (
    <Fragment>
      {isLoading ? (<div className="Loader local">Loading...</div>) : null}
    </Fragment>
  );
};

export default Loader;