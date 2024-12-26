import React, { useState } from 'react';


function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [error, setError] = useState('');

  
  const handleAddItem = () => {
    if (!itemName || !itemPrice || isNaN(itemPrice)) {
      setError('Please enter a valid item name and price.');
      return;
    }

    setError('');
    setCart((prevCart) => [...prevCart, { name: itemName, price: Number(itemPrice) }]);
    setItemName('');
    setItemPrice('');
  };

 
  const handleRemoveItem = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  
  const handleClearCart = () => {
    setCart([]);
    setItemName('');
    setItemPrice('');
    setError('');
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="shopping-cart-container">
      <h2>Shopping Cart</h2>

      <input
        type="text"
        placeholder="Enter item name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        className="cart-input"
      />
      <br />
      <input
        type="number"
        placeholder="Enter item price"
        value={itemPrice}
        onChange={(e) => setItemPrice(e.target.value)}
        className="cart-input"
      />
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="button" onClick={handleAddItem} className="cart-button">
        Add Item
      </button>

      <button type="button" onClick={handleClearCart} className="cart-button">
        Clear Cart
      </button>

      <h3>Cart Items:</h3>
      <ul>
        {cart.length === 0 ? (
          <li>Your cart is empty.</li>
        ) : (
          cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)}{' '}
              <button onClick={() => handleRemoveItem(index)}>Remove</button>
            </li>
          ))
        )}
      </ul>

      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
}

export default ShoppingCart;
