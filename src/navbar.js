import React, { useState } from 'react';
import logo from '../src/assets/Logo.png'; // Ensure the path is correct
import './Navbar.css'; // Add a CSS file for styles

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Track whether the menu is open or not

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  return (
    <nav>
      <div className="navbar">
        {/* Logo and Title */}
        <div className="logo-container">
          <img src={logo} alt="Gym Logo" className="logo" />
          <h1 className="site-title">Be Fit Gym</h1>
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Regular Navbar (Hidden on mobile) */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#trainers">Trainers</a></li>
          <li><a href="#membership">Membership</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact-us">Contact</a></li>
        </ul>
      </div>

      {/* Side Menu - Mobile Only */}
      {menuOpen && (
        <div className="side-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#trainers">Trainers</a></li>
            <li><a href="#membership">Membership</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact-us">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
