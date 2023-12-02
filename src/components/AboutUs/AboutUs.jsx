import React from 'react'
import './AboutUs.css'
import banner from '../../asset/home/About.png'

const AboutUs = () => {
  return (
    <div className='aboutus'>
      <div className="aboutus-img">
        <img src={banner} alt="" />
      </div>
      <div className="aboutus-text">
        <h1>About Us</h1>
        <p>Glimmering Grove, a beacon of elegance and style in the world of jewelry. Crafted with passion and precision, our pieces radiate timeless beauty, capturing the essence of sophistication and luxury.</p>
        <button>More about us</button>
      </div>
    </div>
  )
}

export default AboutUs