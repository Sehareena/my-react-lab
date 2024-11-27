import React from 'react';
import './style/footer.css'; // Import CSS file
function FooterApp() {
return (
<footer className="split-footer">
  <div className="footer-left">
    <div className="footer-logo">
      <img src="https://yt3.googleusercontent.com/3lWLPgOJPXzV7vhGG1xrQIG1_LcgGNj7ECn6vUw77cdSiGDtdVPBhIX2zavda1O3S5bzPxfFUA=s900-c-k-c0x00ffffff-no-rj" alt="Wafa Marble Logo" />
    </div>
    <p>Contact 03122269373</p>
    <p>Email: info@wafamarble.com</p>
  </div>
  <div className="footer-right">
    <div className="footer-links">
      <ul>
        <li><a href="/about-us">About Us</a></li>
        <li><a href="/contact">contact</a></li>
        <li><a href="/services">services</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
      </ul>
    </div>
    <div className="footer-social">
      <a href="https://www.facebook.com/share/1Y9FqPoRqr/?mibextid=LQQJ4d" className="social-icon">Facebook</a>
      <a href="https://www.instagram.com/wafa_marble" className="social-icon">Instagram</a>
      <a href="https://youtube.com/channel/UC2Tr_jacacNbFYrup6iHOFA" className="social-icon">youtube</a>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2024 Wafa Marble. All rights reserved.</p>
  </div>
</footer>
);
}

export default FooterApp;

