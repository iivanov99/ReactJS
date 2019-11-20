import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ apparel }) => {
  return (
    <div className="row row-silver">
      {
        apparel.length ?
          (
            apparel.map(({ name, description, imageUrl, price }) => (
              <ProductCard
                key={name}
                name={name}
                description={description}
                imageUrl={imageUrl}
                price={price}
              />
            ))
          ) :
          (
            <p>Loading...</p>
          )
      }
    </div>
  );
};

export default ProductList;