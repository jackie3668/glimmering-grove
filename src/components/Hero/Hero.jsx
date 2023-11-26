import React, { useEffect, useState } from 'react'
import './Hero.css'
import heroBg1 from '../../asset/hero/1.png';
import heroBg2 from '../../asset/hero/2.png';
import heroBg3 from '../../asset/hero/3.png';
import heroBg4 from '../../asset/hero/4.png';
import arrow from '../../asset/ui/arrow-down-sign-to-navigate.png'
import circle from '../../asset/ui/dry-clean.png'
import circle_filled from '../../asset/ui/new-moon.png'
import pause from '../../asset/ui/pause.png'


const Hero = () => {
  const imageUrls = [heroBg1, heroBg2, heroBg3, heroBg4];
  const [carouselIndex, setCarouselIndex] = useState(0)

  const image = document.getElementById('hero-carousel-image');

  const handleIndicatorClick = (e) => {
    image.src = imageUrls[e.target.id]
    setCarouselIndex(e.target.id)
  }

  const handlePrevClick = () => {
    if (carouselIndex <= 0) {
      setCarouselIndex(3)
      image.src = imageUrls[carouselIndex]
    } else {
      setCarouselIndex(carouselIndex-1)
      image.src = imageUrls[carouselIndex]
    }
  }

  const handleNextClick = () => {
    if (carouselIndex >= 3) {
      setCarouselIndex(0)
      image.src = imageUrls[carouselIndex]
    } else {
      setCarouselIndex(carouselIndex+1)
      image.src = imageUrls[carouselIndex]
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 2000); 

    return () => clearInterval(timer);
  }, [imageUrls.length]); 


  return (
    <div className='hero'>
      <div className="hero-carousel-container">
        <img id='hero-carousel-image' src={imageUrls[carouselIndex]} alt="" />
      </div>
      <div className="hero-slider">
        <img onClick={handlePrevClick} className='left' src={arrow} alt="arrow icon" />
        <div className="hero-slider-indicator">
          <img onClick={handleIndicatorClick} id='0' src={carouselIndex === 0 ? circle_filled : circle} alt="circle" />
          <img onClick={handleIndicatorClick} id='1' src={carouselIndex === 1 ? circle_filled : circle}  alt="circle" />
          <img onClick={handleIndicatorClick} id='2' src={carouselIndex === 2 ? circle_filled : circle}  alt="circle" />
          <img onClick={handleIndicatorClick} id='3' src={carouselIndex === 3 ? circle_filled : circle}  alt="circle" />
        </div>
        <img onClick={handleNextClick} className='right' src={arrow} alt="arrow icon" />
        <img src={pause} alt="pause" />
      </div>
    </div>
  )
}

export default Hero