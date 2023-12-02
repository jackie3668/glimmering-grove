import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '../../asset/home/Footer.png'
import discord from '../../asset/home/discord.png'
import instagram from '../../asset/home/instagram.png'
import twitter from '../../asset/home/twitter.png'
import facebook from '../../asset/home/facebook.png'
import whatsapp from '../../asset/home/whatsapp.png'
import youtube from '../../asset/home/youtube.png'
import tiktok from '../../asset/home/tik-tok.png'
import pinterest from '../../asset/home/pinterest.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-logo footer-section">
          <img src={logo} alt="" />
        </div>
        <div className="footer-section info">
          <h3>Information</h3>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>FAQ</li>
            <li>BLOG</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="footer-section shop">
          <h3>The Shop</h3>
            <ul>
              <li>SHOP</li>
              <li>PRIVACY POLICY</li>
              <li>SHIPPING POLICY</li>
              <li>REFUND POLICY</li>
              <li>TERMS OF SERVICE</li>
            </ul>
        </div>
        <div className="footer-section brand">
          <h3>Glimmering Grove</h3>
          <p>Glimmering Grove, a beacon of elegance and style in the world of jewelry. Crafted with passion and precision, our pieces radiate timeless beauty, capturing the essence of sophistication and luxury.</p>
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