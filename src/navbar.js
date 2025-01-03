import React from 'react';
import logo from '../src/assets/Logo.png'; // Ensure the path is correct

function Navbar() {
  return (
    <nav >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Gym Logo"  />
        <h1>B Fit Gym</h1>
      </div>
      <ul >
        <li><a href="#home" >Home</a></li>
        <li><a href="#trainers" >Trainers</a></li>
        <li><a href="#membership" >Membership</a></li>
        <li><a href="#testimonials" >Testimonials</a></li>
        <li><a href="#contact-us" >Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
