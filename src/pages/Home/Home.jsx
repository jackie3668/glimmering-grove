import React, { useState, useEffect, useRef } from 'react'
import './Home.css'
import { Featured, Hero, ScrollingBar, Collections, Reviews, AboutUs, Newsletter } from '../../components'
import arrow from '../../asset/ui/arrow-down-sign-to-navigate.png'

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > scrollSectionRef.current.offsetTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = (e) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className='home'>
      <div className={`scroll-to-top ${showScrollButton ? 'active' : ''}`} onClick={handleScroll}>
        <img  src={arrow} alt="" />
      </div>
      <div ref={scrollSectionRef}><Hero/></div>
      <ScrollingBar />
      <Collections />
      <Featured />
      <Reviews />
      <AboutUs />
      <Newsletter />
    </div>
  )
}

export default Home