import React from 'react';
import ProductCard from './ProductCard/ProductCard';

const ProductList = ({ apparel, apparelType, isLogged, isAdmin, history, setApparel, forMainPage }) => {
  return (
    <div className="row row-silver">
      {apparel.length ? (
        apparel.map(product => (
          <ProductCard key={product._id} product={product} apparelType={apparelType}
            isLogged={isLogged} isAdmin={isAdmin} history={history}
            setApparel={setApparel} forMainPage={forMainPage} />
      ))) : (
        <div className="loading-div"></div>
      )}
    </div>
  );
};

export default ProductList;