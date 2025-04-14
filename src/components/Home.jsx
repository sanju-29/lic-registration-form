
import React, { useState } from 'react';
import './../components/Home.css'

const Register = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
// Handle change for input fields
const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbzHdpN-Rvr6V4bxmCDunoRd8VY3cl4N9gby_VUjPXOw6TYStmpqtRZ3mA5ecYZZPw4P/exec',
        {
          method: 'POST',
          mode: 'no-cors', // <- THIS FIXES IT!
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );
  
      // Even if there's no response (because of no-cors), show success
      alert("Thanks for registering! We'll get back to you soon.");
      setFormData({ name: '', phone: '', message: '' });
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Network error. Please try again.");
    }
  };
  
  
  
  return (
    <div className="register-container">
      <div id="logo">
        <img src="./LIC-Logo.png" alt="LIC Logo" className="logo-img" />
      </div>

      <div className="top">
        <h1>Hello I'm Suresh C D</h1>
      </div>

      <div className="info-section">
        <p className="para">
          Secure your future with trusted <b>LIC insurance plans</b>. I provide personalized assistance to help you choose the right policy.
        </p>
        <p className="para">
          Interested candidates may contact me directly or fill out the form for a callback. </p><p>Let’s take the first step toward financial security together.
        </p>

        <button className="register-btn">Register Below !!</button>

        {/* Form with input fields */}
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}  // Handle change here
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}  // Handle change here
            required
          />
          <textarea
            name="message"
            placeholder="Your Message (Optional)"
            value={formData.message}
            onChange={handleChange}  // Handle change here
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="footer">
        © 2025 All rights reserved | Bengaluru, India 🇮🇳
      </div>
    </div>
  );
};

export default Register;
