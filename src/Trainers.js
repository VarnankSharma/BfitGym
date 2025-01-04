import React from 'react';
import './YourCSSFile.css'; // Import your global CSS

function Trainers() {
  return (
    <section id="trainers">
      <h2 className="trainers-title">Meet Our Trainers</h2>
      <div className="trainers-container">
        <div className="trainer-box top-trainer">
          <h3>Karan Thakur</h3>
          <span>Experience: 17 years</span>
        </div>
        <div className="trainer-box">
          <h3>Kirti</h3>
          <span>Specializes in female fitness</span>
        </div>
        <div className="trainer-box">
          <h3>Sonu</h3>
          <span>Zumba Trainer</span>
        </div>
      </div>
    </section>
  );
}

export default Trainers;
