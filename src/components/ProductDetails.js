import React from 'react';

const ProductDetails = ({ product }) => {
  if (!product) return null;

  return (
    <div>
      <h1>{product.productName}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Brand: {product.brand}</p>
    </div>
  );
};
export default ProductDetails;