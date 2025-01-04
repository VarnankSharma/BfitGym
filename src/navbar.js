import React, { useState } from 'react';
import logo from '../assets/Logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo and Title */}
      <div className="logo-container">
        <img src={logo} alt="Gym Logo" className="logo" />
        <h1 className="site-title">B-Fit Gym</h1>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
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
