import React from 'react';
import Home from './Home';
import Trainers from './Trainers';
import Membership from './Membership';
import Testimonials from './Testimonials';
import PersonalTraining from './PersonalTraining';
import Footer from './Footer';
import ContactUs from './ContactUs';
import Navbar from './Navbar';
import Facilities from './Facilities';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Facilities/>
      <Trainers />
      <Membership />
      <PersonalTraining />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
