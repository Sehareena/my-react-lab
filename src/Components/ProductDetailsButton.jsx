import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailsButton() {
  const { id } = useParams(); // Dynamic route
  return (
    <div className="product-details">
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
      <p>More details about the product will go here.</p>
    </div>
  );
}

export default ProductDetailsButton;
