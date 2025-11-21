import React, { useState } from 'react';
import './Navbar.css';
import logo from './IMG-20241019-WA0043.jpg'


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMobileMenuOpen ? (
            <div class="close-btn">
              <div class="close-up"></div>
              <div class="close-dn"></div>
            </div> // This can be a custom close button
        ) : (
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div> // This can be a custom hamburger icon
        )}
      </div>
      <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <span><a href='https://linktr.ee/Tim629'>Useful Links</a></span>
        <span><a href='#hero'>Home</a></span>
        <span><a href='#about-us'>About Us</a></span>
        <span><a href='#services'>Services</a></span>
        <span><a href='#contact'>Contact</a></span>
      </div>
    </nav>
  );
};


export default Navbar;
