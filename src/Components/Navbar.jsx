import React from 'react';
import './style/Navbar.css';
function Navbar() {
  return (
    <div>
      <nav className="Navbar">
        <div className="Navbar-logo">
          <a href="/">Wafa Marble</a>
        </div>
        <ul className="Navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="Navbar-button">"Design your dream space with Wafa Marble."</button>
      </nav>
    </div>
  );
}

export default Navbar;
