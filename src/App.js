import React from 'react';
import ProductCard from './Components/ProductCard';

function App() {

  return (
    <div className="app">
      <h1>Product Showcase</h1>
      <ProductCard
        title="Wireless Headphones"
        description="Noise-cancelling, over-ear headphones"
        price={199.99}
        imageUrl="https://powerhouseexpress.com.pk/cdn/shop/files/black.png?v=1698918103"
      />
      <ProductCard
        title="Smartphone"
        description="Latest model with high-resolution display"
        price={999.99}
        imageUrl="https://www.whatmobile.com.pk/admin/images/Apple/AppleiPhone13-b.jpg"
      />
      <ProductCard
        title="Laptop"
        description="High-performance laptop for gaming and work"
        price={1299.99}
        imageUrl="https://www.digitaltrends.com/wp-content/uploads/2023/04/HP-Chromebook-14a-ne0047nr-Laptop.jpg?fit=1200%2C900&p=1"
      />
    </div>
  );
}

export default App;
