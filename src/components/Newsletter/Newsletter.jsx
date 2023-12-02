import React from 'react'
import './Newsletter.css'
import sticky from '../../asset/home/Sticky.jpg'
import banner from '../../asset/home/Newsletter.png'
import arrow from '../../asset/ui/right-arrow.png'

const Newsletter = () => {
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
        <button>Shop now</button>
      </div>
    </div>
  )
}

export default Newsletter