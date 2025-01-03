import React from 'react';
import member1 from '../src/assets/4.jpeg'; // Adjust the path as needed
import member2 from '../src/assets/3.jpeg'; // Adjust the path as needed
import member3 from '../src/assets/2.jpeg'; // Adjust the path as needed

function Testimonials() {
  return (
    <section id="testimonials">
      <h2>What Our Members Say</h2>
      <div className="testimonial">
        <img src={member1} alt="Member 1" />
        <p>"B-Fit transformed my fitness journey. Karan’s expertise and motivating sessions have been life-changing!"</p>
      </div>
      <div className="testimonial">
        <img src={member2} alt="Member 2" />
        <p>"Kirti’s personalized approach and focus on female fitness made all the difference for me!"</p>
      </div>
      <div className="testimonial">
        <img src={member3} alt="Member 3" />
        <p>"Sonu’s energetic Zumba classes are a blast and great for weight loss!"</p>
      </div>
    </section>
  );
}

export default Testimonials;
