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
          <li><Link style={{ textDecoration: 'none'}} to='/'>SHOP BY <img src={arrow} alt="drop down menu" /></Link></li>
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
      </div>
    </div>
  )
}

export default Navbar