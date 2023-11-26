import React, { useState } from 'react'
import './Hero.css'
import heroBg1 from '../../asset/hero/hero-bg-1.png';
import heroBg2 from '../../asset/hero/hero-bg-1.png';
import heroBg3 from '../../asset/hero/hero-bg-1.png';
import heroBg4 from '../../asset/hero/hero-bg-1.png';

const imageUrls = [heroBg1, heroBg2, heroBg3, heroBg4];


const Hero = () => {
  const imageUrls = [heroBg1, heroBg2, heroBg3, heroBg4];
  
  const [carouselIndex, setCarouselIndex] = useState(1)

  return (
    <div className='hero'>
      <div className="hero-carousel-container" style={{backgroundImage: `url(${imageUrls[carouselIndex]})`, }}>
        <div className="hero-carousel-left">left</div>
        <div className="hero-carousel-right">right</div>
      </div>
      <div className="hero-slider">
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </div>
    </div>
  )
}

export default Hero