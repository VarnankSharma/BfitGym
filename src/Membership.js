import React from "react";
// import { Link } from 'react-router-dom';
function Membership() {
  return (
    <section id="membership">
      <h2 className="trainers-title" style={{ color: "#fff", textAlign: "center", padding: "20px 0" }}>
        Membership Plans
      </h2>
      <div className="membership-container">
        <div className="membership-box">
          <h3>Monthly</h3>
          <span>₹1300 / month</span>
          <ul>
            <li>12 Classes Per Month</li>
            <li>6 Classes Per Week</li>
            <li>No Joining Fees</li>
          </ul>
          <div><a href="#contact-us"><button>Join Today</button></a></div>
        </div>
        <div className="membership-box highlight">
          <h3>Yearly</h3>
          <span>₹10,000</span>
          <ul>
            <li>Unlimited Classes Per Month</li>
            <li>4 Personal Session Per Month</li>
            <li>3 Classes Per Day</li>
            <li>Free Gym Bag,Shaker,T-Shirt</li>
            
          </ul>
          <div><a href="#contact-us"><button>Join Today</button></a></div>
        </div>
        <div className="membership-box">
          <h3>Half Yearly</h3>
          <span>₹5500</span>
          <ul>
            <li>Unlimited Classes Per Month</li>
            <li>4 Personal Session Per Month</li>
            <li>Free Shaker</li>
          </ul>
          <div><a href="#contact-us"><button>Join Today</button></a></div>
        </div>
      </div>
    </section>
  );
}

export default Membership;
