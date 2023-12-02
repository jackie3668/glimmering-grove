import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import basket from '../../asset/ui/basket-shopping-simple.png'
import search from '../../asset/ui/search.png'
import logo from '../../asset/ui/logo.png'
import menu from '../../asset/ui/menu-burger.png'
import arrow from '../../asset/ui/arrow-down-sign-to-navigate.png'
import close from '../../asset/ui/close.png'
import mobile_arrow from '../../asset/ui/right-arrow.png'
import discord from '../../asset/home/discord.png'
import instagram from '../../asset/home/instagram.png'
import twitter from '../../asset/home/twitter.png'
import facebook from '../../asset/home/facebook.png'
import whatsapp from '../../asset/home/whatsapp.png'
import youtube from '../../asset/home/youtube.png'
import tiktok from '../../asset/home/tik-tok.png'
import pinterest from '../../asset/home/pinterest.png'

const Navbar = () => {
  const [scrollUp, setScrollUp] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const initialOffsetTop = navbar.offsetTop;
    let lastScrollTop = 0;

    const handleScroll = () => {
      setHidden(true)
      const currentScroll = window.scrollY;

      if (currentScroll < lastScrollTop && currentScroll > initialOffsetTop) {
        setScrollUp(true);
      } else if (currentScroll === 0) {
        setScrollUp(false)
      } else {
        setScrollUp(false);
      }

      lastScrollTop = currentScroll;
    };

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setHidden((prev) => !prev)
  }

  const handleBodyClick = (e) => {
    if (!e.target.closest('.navbar-mobile-menu-drawer') && (!e.target.closest('.navbar-mobile-menu')) && !hidden) {
      setHidden(true)
    }
  }

  document.body.addEventListener('click', handleBodyClick)

  const handleDropdownClick = (e) => {
    if (e.target.closest('li.navbar-desktop-menu-dropdown-item')) {
      return
    } 
    else if (e.target.closest('li.navbar-desktop-menu-dropdown-menu') || e.target.closest('li.navbar-desktop-menu-dropdown-menu img')) {
      console.log(e.target);
      const targetDiv = e.target.querySelector('.navbar-desktop-menu-dropdown-items');
      targetDiv.classList.toggle('active');
    } 
    else {
      const targetDiv = document.querySelector('.navbar-desktop-menu-dropdown-items');
      targetDiv.classList.remove('active');
    }
  }

  document.body.addEventListener('click', handleDropdownClick);

  return (
    <div className={`navbar ${scrollUp ? 'navbar-scroll-up' : ''}`}>
      <div className="navbar-announcement">
        Free shipping on all orders over $200
      </div>
      <div className="navbar-items">
        <div className="navbar-mobile-menu">
          <img onClick={handleMenuClick} src={hidden ? menu : close} alt="menu icon" />
        </div>
        <div className="navbar-search-cart">
          <img src={search} alt="search icon" />
          <img src={basket} alt="basket icon" />
        </div>
        <div className="navbar-logo">
          <Link to='/'><img src={logo} alt="logo" /></Link>
        </div>
      </div>
      <div className="navbar-desktop-menu">
        <ul>
          <li><Link style={{ textDecoration: 'none'}} to='/'>HOME</Link></li>
          <li onClick={handleDropdownClick} className='navbar-desktop-menu-dropdown-menu'>SHOP BY 
            <img src={arrow} alt="drop down menu" />
            <div className="navbar-desktop-menu-dropdown-items">
              <ul>
                <li className="navbar-desktop-menu-dropdown-item">Shop All</li>
                <li className="navbar-desktop-menu-dropdown-item">New Arrivals</li>
                <li className="navbar-desktop-menu-dropdown-item">Best Sellers</li>
                <li className="navbar-desktop-menu-dropdown-item">Sale</li>
                <li className="navbar-desktop-menu-dropdown-item">Limited Edition</li>
              </ul>
            </div>
          </li>
          <li><Link style={{ textDecoration: 'none'}} to='/'>ABOUT</Link></li>
          <li><Link style={{ textDecoration: 'none'}} to='/'>BLOG</Link></li>
          <li><Link style={{ textDecoration: 'none'}} to='/'>CONTACT</Link></li>
        </ul>
      </div>
      <div className={`navbar-mobile-menu-drawer ${hidden ? 'hidden' : ''}`}>
        <div className='navbar-mobile-menu-drawer-items'>
          <ul>
          <li><Link style={{ textDecoration: 'none'}} to='/'>HOME</Link></li>
          <li><Link style={{ textDecoration: 'none'}} to='/'>SHOP BY <img src={mobile_arrow} alt="arrow icon" /></Link></li>
          <li><Link style={{ textDecoration: 'none'}} to='/'>ABOUT</Link></li>
          <li><Link style={{ textDecoration: 'none'}} to='/'>BLOG</Link></li>
          <li><Link style={{ textDecoration: 'none'}} to='/'>CONTACT</Link></li>
          </ul>
        </div>
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
      </div>
    </div>
  )
}

export default Navbar