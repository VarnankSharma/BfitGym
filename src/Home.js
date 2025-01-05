import React, { useEffect } from 'react';
import back from '../src/assets/1.jpeg'; // Adjust path as needed

function Home() {
  useEffect(() => {
    const homeSection = document.querySelector('.home-section');
    homeSection.style.animation = 'slideUp 1s ease-out forwards';
  }, []);

  return (
    <section
      id="home"
      className="home-section"
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className="welcome">
        <h2 style={{ fontSize: '5rem' }}>Welcome to Be-Fit Gym</h2>
      </div>
      <p className="motto">Your journey to fitness starts here!</p>
      <p className="timing">Timings: 6:00 AM - 11:00 AM / 4:00 PM - 9:00 PM</p>
      <div className="scroll-cue">
  <span>Scroll</span>
  <div className="arrow"></div>
</div>

    </section>
    
  );
}

export default Home;
