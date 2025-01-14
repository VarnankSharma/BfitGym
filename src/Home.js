import React, { useEffect } from 'react';
import back from './assets/1.png'; // Adjust path if necessary

function Home() {
  useEffect(() => {
    console.log('Home component loaded and animation applied');
  }, []);

  return (
    <section
      id="home"
      className="home-section"
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className="welcome">
        <h2>Welcome to Be-Fit Gym</h2>
      </div>
      <p className="motto">Your journey to fitness starts here!</p>
      <p className="timing">Timings: 6:00 AM - 11:00 AM / 4:00 PM - 9:00 PM</p>
      <div
  className="scroll-cue"
  onMouseOver={() => {
    window.scrollTo({
      top: window.innerHeight, // Scrolls to the next section
      behavior: "smooth",
    });
  }}
  onClick={() => {
    window.scrollTo({
      top: window.innerHeight, // Scrolls to the next section
      behavior: "smooth",
    });
  }}
>
  <span>Scroll</span>
  <div className="arrow"></div>
</div>

    </section>
  );
}

export default Home;
