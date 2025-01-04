import React from 'react';

function Testimonials() {
  return (
    <section id="testimonials">
      <h2>What Our Members Say</h2>
      <div className="testimonial">
        <img src="/assets/4.jpeg" alt="Member 1" />
        <p>"B-Fit transformed my fitness journey. Karan’s expertise and motivating sessions have been life-changing!"</p>
      </div>
      <div className="testimonial">
        <img src="/assets/3.jpeg" alt="Member 2" />
        <p>"Kirti’s personalized approach and focus on female fitness made all the difference for me!"</p>
      </div>
      <div className="testimonial">
        <img src="/assets/2.jpeg" alt="Member 3" />
        <p>"Sonu’s energetic Zumba classes are a blast and great for weight loss!"</p>
      </div>
    </section>
  );
}

export default Testimonials;
