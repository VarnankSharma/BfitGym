import React from 'react';
import Home from './Home';
import Trainers from './Trainers';
import Membership from './Membership';
import Testimonials from './Testimonials';
import PersonalTraining from './PersonalTraining';
import Footer from './Footer';
import ContactUs from './ContactUs'; // Ensure ContactUs is imported
import Navbar from './navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home />
      <Trainers />
      <Membership />
      <PersonalTraining />
      <Testimonials />
      <ContactUs /> {/* Make sure the ContactUs component is added here */}
      <Footer />
    </div>
  );
}

export default App;
