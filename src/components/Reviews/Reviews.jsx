import React from 'react'
import './Reviews.css'
import banner from '../../asset/home/Reviews.png'
import star from '../../asset/ui/star_rating.png'

const Reviews = () => {
  return (
    <div className='reviews'>
      <img className='review-banner' src={banner} alt="" />
      <div className="reviews-container">
        <div className="review-wrapper">
          <div className="review-rating">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
          <p>Beautiful products and brilliant customer service.</p>
        </div>
        <div className="review-wrapper">
          <div className="review-rating">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
          <p>Fast delivery and high quality products.</p>
        </div>
        <div className="review-wrapper">
          <div className="review-rating">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
          <p>Owner is very friendly and helped me with all my queries.</p>
        </div>
        <div className="review-wrapper">
          <div className="review-rating">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
          <p>A wide variety of choices. Brilliant customer care.</p>
        </div>
      </div>
    </div>
  )
}

export default Reviews