import React from 'react';
import ProductCard from './ProductCard/ProductCard';

const ProductList = ({ apparel, apparelType, isLogged, isAdmin, history, setApparel, forMainPage }) => {
  return (
    <div className="row row-silver">
      {apparel.length ? (
        apparel.map(({ _id, name, description, imageUrl, price }) => (
          <ProductCard key={_id} id={_id} name={name} description={description}
            imageUrl={imageUrl} price={price} apparelType={apparelType}
            isLogged={isLogged} isAdmin={isAdmin} history={history}
            setApparel={setApparel} forMainPage={forMainPage} />
      ))) : (
        <div className="loading-div"></div>
      )}
    </div>
  );
};

export default ProductList;