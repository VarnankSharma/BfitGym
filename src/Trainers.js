import React from 'react';
import karan from '../src/assets/Karan.jpg';
// Uncomment these imports when you're ready to add Kirti and Sonu
// import kirti from '../src/assets/Kirti.jpg';
// import sonu from '../src/assets/Sonu.jpg';

function Trainers() {
  return (
    <section id="trainers">
      <h2 className="trainers-title">Meet Our Trainers</h2>
      <div className="trainers-container">
        <div className="trainer-box top-trainer">
          <img src={karan} alt="Karan Thakur" className="trainer-img" />
          <div className="trainer-info">
            <h3>Karan Thakur</h3>
            <span>Experience: 17 years</span>
            <p>Certified Fitness Trainer, Nutritionist, and Supplement Specialist</p>
          </div>
        </div>
        
        {/* Uncomment below code to add Kirti and Sonu later */}
        {/* <div className="trainer-box">
          <img src={kirti} alt="Kirti" className="trainer-img" />
          <div className="trainer-info">
            <h3>Kirti</h3>
            <span>Specializes in female fitness</span>
            <p>Personalized fitness training for women</p>
          </div>
        </div>
        <div className="trainer-box">
          <img src={sonu} alt="Sonu" className="trainer-img" />
          <div className="trainer-info">
            <h3>Sonu</h3>
            <span>Zumba Trainer</span>
            <p>Energetic and fun Zumba sessions</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Trainers;
