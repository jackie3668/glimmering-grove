import React from 'react';
import './About.css';
import banner from '../../asset/other/about_banner.png'
import about_1 from '../../asset/other/about1.png'
import about_2 from '../../asset/other/about2.png'
import about_3 from '../../asset/other/about3.png'
import about_4 from '../../asset/other/about4.png'

const About = () => {
  return (
    <div className="about">
      <div className="about-banner">
        <img src={banner} alt="" />
      </div>
      <div className="about-container">
        <div className="about-header">
          <img src={about_1} alt="" />
          <div className='about-wrapper'>
            <h2>Welcome to Glimmering Grove</h2>
            <p className="about-intro">
              Established in Paris in 2008, Glimmering Grove has been at the forefront
              of fast fashion, bringing exquisite jewelry to
              fashion-forward individuals around the world.
            </p>
          </div>
        </div>
        <div className="about-values">
          <img src={about_2} alt="" />
          <div className='about-wrapper'>
            <h2>Our Values</h2>
            <p>
              Our jewelry is more than just accessories;
              it's an expression of individuality, crafted with precision and passion.
            </p>
          </div>
        </div>
        <div className="about-mission">
          <img src={about_3} alt="" />
          <div className='about-wrapper'>
            <h2>Our Mission</h2>
            <p>
              We aim to redefine the jewelry landscape by embracing innovation, ethical practices, and affordability without compromising on style.
            </p>
          </div>
        </div>
        <div className="about-ethics">
          <img src={about_4} alt="" />
          <div className='about-wrapper'>          
            <h2>Ethical Practices</h2>
            <p>
              We prioritize sustainability and transparency in every step of our supply
              chain, ensuring that each piece of jewelry reflects our dedication to the
              environment and social responsibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
