import React, { useState } from 'react';
import logo from '../src/assets/Logo.png'; // Ensure the path is correct

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Track whether the menu is open or not

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  return (
    <nav>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Gym Logo" />
        <h1>B Fit Gym</h1>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Side Menu - Will slide in/out based on state */}
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#trainers">Trainers</a></li>
          <li><a href="#membership">Membership</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact-us">Contact</a></li>
        </ul>
      </div>

      {/* Regular Navbar (Hidden on mobile) */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#trainers">Trainers</a></li>
        <li><a href="#membership">Membership</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact-us">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
