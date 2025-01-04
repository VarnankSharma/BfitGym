import React from 'react';
import back from '../src/assets/1.jpeg'; // Adjust path as needed

function Home() {
  return (
    <section id="home" className="home-section" style={{ backgroundImage: `url(${back})` }}>
      <div className="welcome">
        <h2>Welcome to Be-Fit Gym</h2>
      </div>
      <p className="motto">Your journey to fitness starts here!</p>
      <p className="timing">Timings: 6:00 AM - 11:00 AM / 4:00 PM - 9:00 PM</p>
    </section>
  );
}

export default Home;
