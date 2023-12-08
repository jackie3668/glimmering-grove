import React from 'react'
import './Newsletter.css'
import banner from '../../asset/home/Newsletter.png'
import arrow from '../../asset/ui/right-arrow.png'
import { Link } from 'react-router-dom'

const Newsletter = () => {
  const handleScrollToTop = (e) => {
    window.scrollTo({
      top: 0
    });
  }
  
  return (
    <div className='newsletter'>
      <div className="newsletter-email">
        <img className='newsletter-email-banner' src={banner} alt="" />
        <p>Be the first to know about new collections and exclusive offers.</p>
        <div className="newsletter-email-input">
          <input type="email" placeholder='Email'/>
          <img src={arrow} alt="" />
        </div>
        
      </div>
      <div className="newsletter-shop">
        <h1>New Arrivals</h1>
        <p>Elevate your style with the latest trends, designed to inspire and dazzle. Unveil sophistication with each piece.</p>
        <Link onClick={handleScrollToTop} to='/new'><button>Shop now</button></Link>
      </div>
    </div>
  )
}

export default Newsletter