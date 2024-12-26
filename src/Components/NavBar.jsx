import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/style.css';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/product/1">Product Details</Link>
      <Link to="/user/demoUser">User Profile</Link>
      <Link to="/cart">Shopping Cart</Link>
    </nav>
  );
}

export default NavBar;
