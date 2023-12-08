import React from 'react'
import './Footer.css'
import logo from '../../asset/home/Footer.png'
import discord from '../../asset/home/discord.png'
import instagram from '../../asset/home/instagram.png'
import twitter from '../../asset/home/twitter.png'
import facebook from '../../asset/home/facebook.png'
import whatsapp from '../../asset/home/whatsapp.png'
import youtube from '../../asset/home/youtube.png'
import tiktok from '../../asset/home/tik-tok.png'
import pinterest from '../../asset/home/pinterest.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  const handleScrollToTop = (e) => {
    window.scrollTo({
      top: 0
    });
  }

  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-logo footer-section">
          <img src={logo} alt="" />
        </div>
        <div className="footer-section">
          <h3>Information</h3>
          <ul>
            <li><Link to="/" onClick={handleScrollToTop}>HOME</Link></li>
            <li><Link to="/about" onClick={handleScrollToTop}>ABOUT</Link></li>
            <li><Link to="/faq" onClick={handleScrollToTop}>FAQ</Link></li>
            <li><Link to="/blog" onClick={handleScrollToTop}>BLOG</Link></li>
            <li><Link to="/contact" onClick={handleScrollToTop}>CONTACT</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>The Shop</h3>
          <ul>
            <li><Link to="/all" onClick={handleScrollToTop}>SHOP</Link></li>
            <li><Link to="/privacy-policy" onClick={handleScrollToTop}>PRIVACY POLICY</Link></li>
            <li><Link to="/shipping-policy" onClick={handleScrollToTop}>SHIPPING POLICY</Link></li>
            <li><Link to="/refund-policy" onClick={handleScrollToTop}>REFUND POLICY</Link></li>
            <li><Link to="/terms-of-service" onClick={handleScrollToTop}>TERMS OF SERVICE</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Glimmering Grove</h3>
          <p>Crafted with passion and precision, our pieces radiate timeless beauty, capturing the essence of sophistication and luxury.</p>
        </div>
      </div>
      <div className="footer-bot">
        <div className='divider'></div>
        <div className="footer-bot-socials">
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <img src={discord} alt="Discord Icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram Icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter Icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook Icon" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="WhatsApp Icon" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="YouTube Icon" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src={tiktok} alt="TikTok Icon" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <img src={pinterest} alt="Pinterest Icon" />
          </a>
        </div>
        <div className="footer-bot-copyright">
        &copy; 2023 Glimmering Grove. All Rights Reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer