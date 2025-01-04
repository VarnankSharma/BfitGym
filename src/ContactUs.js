import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    membershipType: '', // Membership type state
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // State for loading
  const [error, setError] = useState(''); // Error state

  // Handle form field change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set loading state
    setError(''); // Reset error

    const serviceID = 'service_7cwbmwq'; // Your Service ID from EmailJS
    const templateID = 'template_97xx9bq'; // Your Template ID from EmailJS
    const userID = 'EOTjI7_7__iX_r6XP'; // Your User ID from EmailJS

    if (!formData.name || !formData.email || !formData.message || !formData.membershipType) {
      setError('Please fill in all the fields.');
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      membership_type: formData.membershipType,
    };

    try {
      // Send the email using EmailJS
      const response = await emailjs.send(serviceID, templateID, templateParams, userID);
      console.log('Message sent successfully:', response);
      alert('Your message has been sent!');
      setFormData({
        name: '',
        email: '',
        message: '',
        membershipType: '', // Reset membership type
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Sorry, something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  };

  return (
    <section id="contact-us">
      <h2>Contact Us</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="membershipType">Membership Type:</label>
          <select
            id="membershipType"
            name="membershipType"
            value={formData.membershipType}
            onChange={handleChange}
            required
          >
            <option value="">Select Membership Type</option>
            <option value="1 Month">1 Month</option>
            <option value="3 Months">3 Months</option>
            <option value="6 Months">6 Months</option>
            <option value="1 Year">1 Year</option>
          </select>
        </div>

        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}

export default ContactUs;
