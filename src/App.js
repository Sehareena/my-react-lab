import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import UserProfile from './Components/UserProfile';
import ShoppingCart from './Components/ShoppingCart';
import NavBar from './Components/NavBar'; // Ensure this matches the import statement
import ProductDetailsButton from './Components/ProductDetailsButton';

function App() {
  return (
    <Router>
      <NavBar /> {/* Use the correct casing here */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetailsButton />} />
          <Route path="/user/:username" element={<UserProfile />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
