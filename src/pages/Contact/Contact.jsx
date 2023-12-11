import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-banner">
        <button onClick={() => window.scrollTo({ top: 1300, behavior: 'smooth' })}>
          Contact Us
        </button>
      </div>
      <div className="contact-info">
        <h2>Have a question about one of our products? Want to know more about us?</h2>
      </div>
      <div className="office-details">
        <div className="contact-details">
          <h2>Contact Details</h2>
          <div className="office">
            <h3>Paris Office</h3>
            <p>123 Glimmering Street, Paris</p>
            <p>Email: info@glimmeringgrove.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className="office">
            <h3>London Office</h3>
            <p>456 Sparkling Lane, London</p>
            <p>Email: london@glimmeringgrove.com</p>
            <p>Phone: +44 20 1234 5678</p>
          </div>
          <div className="office">
            <h3>New York Office</h3>
            <p>789 Radiant Avenue, New York</p>
            <p>Email: newyork@glimmeringgrove.com</p>
            <p>Phone: +1 212 345 6789</p>
          </div>
          <div className="office">
            <h3>Milan Office</h3>
            <p>101 Shimmering Square, Milan</p>
            <p>Email: milan@glimmeringgrove.com</p>
            <p>Phone: +39 02 3456 7890</p>
          </div>
        </div>
        <div className="contact-map">
          <h2>Location</h2>
          <iframe
            title="Google Map"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d0.000000!3d0.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMDDCsDI0JzUzLjkiTiAwwrA0MCczMC4wIlc!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      <div className="contact-form">
        <p>Got a question for us? Let us know and we will get back to you in 24 hours!</p>
        <div className="contact-form-field">
          <input type="text" id='first' placeholder='First Name'/>
          <input type="text" id='last' placeholder='Last Name'/>
          <input type="tel" id='tel' placeholder='Phone Number'/>
          <input type="email" id='email' placeholder='Email'/>
          <input type="text" id='subject' placeholder='Subject'/>
          <textarea rows="4" id='text' placeholder='Your Message'/>

        </div>

        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
