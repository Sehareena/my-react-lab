import React from 'react';
import './style/ProductCard.css';

function ProductCard({ title, description, price, imageUrl }) {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
