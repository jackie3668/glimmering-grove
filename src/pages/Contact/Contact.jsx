import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-banner">
        <button onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>
          Contact Us
        </button>
      </div>
      <div className="contact-info">
        <h2>Have a question about one of our products? Want to know more about us?</h2>
        <p>Please don't hesitate to get in touch!</p>
      </div>
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
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d0.000000!3d0.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMDDCsDI0JzUzLjkiTiAwwrA0MCczMC4wIlc!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          allowFullScreen
        ></iframe>
      </div>
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <div className="form-row">
            <label>
              First Name:
              <input type="text" name="firstName" />
            </label>
            <label>
              Last Name:
              <input type="text" name="lastName" />
            </label>
          </div>
          <div className="form-row">
            <label>
              Phone:
              <input type="tel" name="phone" />
            </label>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
          </div>
          <div className="form-row">
            <label>
              Subject:
              <input type="text" name="subject" />
            </label>
          </div>
          <div className="form-row">
            <label>
              Content:
              <textarea rows="4" name="content"></textarea>
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
