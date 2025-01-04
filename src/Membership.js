import React from 'react';

function Membership() {
  return (
    <section id="membership">
      <h2 className="trainers-title">Membership Plans</h2>
      <div className="membership-container">
        <div className="membership-box">
          <h3>1 Month</h3>
          <span>Rs 1300</span>
        </div>
        <div className="membership-box">
          <h3>3 Months</h3>
          <span>Rs 3500</span>
        </div>
        <div className="membership-box">
          <h3>6 Months</h3>
          <span>Rs 5500 (1 Shaker Free)</span>
        </div>
        <div className="membership-box">
          <h3>1 Year</h3>
          <span>Rs 10000 (1 Month Free + Gym Bag)</span>
        </div>
      </div>
    </section>
  );
}

export default Membership;
