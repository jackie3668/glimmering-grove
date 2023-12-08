import React from 'react'
import './AboutUs.css'
import banner from '../../asset/home/About.png'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  const handleScrollToTop = (e) => {
    window.scrollTo({
      top: 0
    });
  }

  return (
    <div className='aboutus'>
      <div className="aboutus-img">
        <img src={banner} alt="" />
      </div>
      <div className="aboutus-text">
        <h1>About Us</h1>
        <p>Glimmering Grove, a beacon of elegance and style in the world of jewelry. Crafted with passion and precision, our pieces radiate timeless beauty, capturing the essence of sophistication and luxury.</p>
        <Link onClick={handleScrollToTop} to='/about'><button>More about us</button></Link>
      </div>
    </div>
  )
}

export default AboutUs