import React, { useState } from 'react';
import logo from '../src/assets/Logo.png'; // Ensure the path is correct
import './Navbar.css'; // Import the CSS file

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Gym Logo" style={{ height: '50px' }} />
        <h1>B Fit Gym</h1>
      </div>

      {/* Normal navigation links */}
      <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#trainers">Trainers</a></li>
        <li><a href="#membership">Membership</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact-us">Contact</a></li>
      </ul>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Side Menu */}
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#trainers">Trainers</a></li>
          <li><a href="#membership">Membership</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact-us">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
