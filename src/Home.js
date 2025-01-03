import React from 'react';
import backgroundImage from '../src/assets/1.jpeg'; // Adjust the path as needed

function Home() {
  return (
    <section 
      id="home" 
      style={{
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: '', /* Ensures the image covers the section without stretching */
        backgroundPosition: 'center', /* Centers the image */
        height: '100vh', /* Full viewport height */
        color: 'white', /* White text color */
       
        backgroundRepeat: 'repeat', /* Prevents the image from repeating */
        backgroundAttachment: 'fixed' /* Keeps the image fixed during scrolling */
      }}
    >
        <div className='welcome'>
        <h2>Welcome to B-Fit Gym</h2>

        </div>
     
      <p className='moto'>Your journey to fitness starts here!</p>
      <p className="timing">Timings: 6:00 AM - 11:00 AM / 4:00 PM - 9:00 PM</p>
    </section>
  );
}

export default Home;
