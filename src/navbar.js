import React, { useState } from 'react';
import logo from '../src/assets/Logo.png'; // Adjusted to reflect public directory usage

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Gym Logo" className="logo" />
        <h1 className="site-title">B-Fit Gym</h1>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
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
