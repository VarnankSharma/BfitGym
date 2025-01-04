import React from 'react';

function Trainers() {
  return (
    <section id="trainers">
      <h2>Meet Our Trainers</h2>
      <div className="trainers-container">
        {/* Top Trainer */}
        <div className="top-trainer">
          <div className="trainer-box">
            <h3>Karan Thakur</h3>
            <span>Experience: 17 years</span>
          </div>
        </div>
        {/* Bottom Trainers */}
        <div className="bottom-trainers">
          <div className="trainer-box">
            <h3>Kirti</h3>
            <span>Specializes in female fitness</span>
          </div>
          <div className="trainer-box">
            <h3>Sonu</h3>
            <span>Zumba Trainer</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trainers;
