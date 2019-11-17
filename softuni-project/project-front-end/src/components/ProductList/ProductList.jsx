import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ apparel }) => {
  return (
    <div class="row row-silver">
      {
        apparel.map(({ name, description, imageUrl, price }) => (
          <ProductCard
            name={name}
            description={description}
            imageUrl={imageUrl}
            price={price}
          />
        ))
      }
    </div>
  );
};

export default ProductList;