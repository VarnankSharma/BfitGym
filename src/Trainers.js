import React from 'react';
import karan from '../src/assets/Karan.jpg';
function Trainers() {
  return (
    <section id="trainers">
      <h2 className="trainers-title">Meet Our Trainers</h2>
      <div className="trainers-container">
        <div className="trainer-box top-trainer">
          <img src={karan} alt="Karan Thakur" className="trainer-img" />
          <h3>Karan Thakur</h3>
          <span>Experience: 17 years</span>
        </div>
        {/* <div className="trainer-row">
          <div className="trainer-box">
            <img src="kirti-image.jpg" alt="Kirti" className="trainer-img" />
            <h3>Kirti</h3>
            <span>Specializes in female fitness</span>
          </div>
          <div className="trainer-box">
            <img src="sonu-image.jpg" alt="Sonu" className="trainer-img" />
            <h3>Sonu</h3>
            <span>Zumba Trainer</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Trainers;
