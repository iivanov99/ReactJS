import React from 'react';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <div className="row row-silver row-not-found">
      <div className="col-md-12 col-not-found">
        <h1>404 <span className="underline">Page Not Found</span></h1>
      </div>
    </div>
  );
};

export default PageNotFound;