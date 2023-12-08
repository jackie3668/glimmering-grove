import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>Welcome to Glimmering Grove</h1>
        <p className="about-intro">
          Established in Paris in 2008, Glimmering Grove has been at the forefront
          of fast fashion, bringing the latest trends in exquisite jewelry to
          fashion-forward individuals around the world.
        </p>
      </div>
      <div className="about-values">
        <h2>Our Values</h2>
        <p>
          At Glimmering Grove, we are driven by a commitment to excellence,
          creativity, and sustainability. Our jewelry is more than just accessories;
          it's an expression of individuality, crafted with precision and passion.
        </p>
      </div>
      <div className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower individuals to shine with confidence by providing
          them with uniquely designed, high-quality jewelry. We aim to redefine the
          jewelry landscape by embracing innovation, ethical practices, and
          affordability without compromising on style.
        </p>
      </div>
      <div className="about-ethics">
        <h2>Ethical Practices</h2>
        <p>
          Glimmering Grove is committed to ethical sourcing and responsible production.
          We prioritize sustainability and transparency in every step of our supply
          chain, ensuring that each piece of jewelry reflects our dedication to the
          environment and social responsibility.
        </p>
      </div>
    </div>
  );
};

export default About;
