import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    membershipType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [phoneError, setPhoneError] = useState(''); // State for phone error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === 'phone') {
      // Validate phone number on change
      const phoneRegex = /^[0-9]{10}$/; // Regex for 10 digits phone number
      if (!phoneRegex.test(e.target.value)) {
        setPhoneError('Phone number must be 10 digits');
      } else {
        setPhoneError('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const { name, email, message, membershipType, phone } = formData;

    if (!name || !email || !message || !membershipType || !phone) {
      setError('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    if (phoneError) {
      setError('Please correct the phone number.');
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      phone,
      message,
      membership_type: membershipType,
    };

    try {
      await emailjs.send(
        'service_7cwbmwq',
        'template_97xx9bq',
        templateParams,
        'EOTjI7_7__iX_r6XP'
      );
      alert('Your message has been sent!');
      setFormData({ name: '', email: '', phone: '', message: '', membershipType: '' });
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-us">
      <h2>Contact Us</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          pattern="[0-9]{10}" // Enforcing 10 digits format
          required
        />
        {phoneError && <p className="error-message">{phoneError}</p>} {/* Display phone error message */}
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        <select
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
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}

export default ContactUs;
