import React, { useEffect, useState, useContext } from 'react'
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
import { ShopContext } from '../../context/ShopContext';
import check from '../../asset/ui/check.png'

const Navbar = () => {
  const [scrollUp, setScrollUp] = useState(false)
  const [showNav, setShowNav] = useState(false)
  const [hidden, setHidden] = useState(true)
  const [shopbyHidden, setShopbyHidden] = useState(true)
  const { cartDetails, setCartDetails, products, addToCartItems, buyNowItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems } = useContext(ShopContext);

  
  const handleScrollToTop = (e) => {
    window.scrollTo({
      top: 0
    });
  }

  useEffect(() => {
    let lastScrollTop = 0

    const handleScroll = () => {
      setHidden(true)
      const currentScroll = window.scrollY;
      const targetDiv = document.querySelector('.navbar-cart-details-wrapper')
      targetDiv.classList.remove('active')

      if (currentScroll < lastScrollTop && currentScroll > window.innerHeight) {
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
    setShopbyHidden(true)
  }

  const handleBodyClick = (e) => {
    if (!e.target.closest('.navbar-mobile-menu-drawer') && (!e.target.closest('.navbar-mobile-menu')) && !hidden) {
      setHidden(true)
    } else if (e.target.parentNode.nodeName === 'LI' && !e.target.parentNode.classList.contains('do-not-close')) {
      setHidden(true)
    }
  }

  document.body.addEventListener('click', handleBodyClick)

  const handleDropdownClick = (e) => {
    if (e.target.nodeName === 'UL') {
      return
    } else if (e.target.closest('li.navbar-desktop-menu-dropdown-menu') && e.target.nodeName === 'IMG') {
    const targetDiv = document.querySelector('.navbar-desktop-menu-dropdown-items');
    targetDiv.classList.toggle('active');
    } else if (e.target.closest('li.navbar-desktop-menu-dropdown-menu')) {
      const targetLi = e.target.closest('li.navbar-desktop-menu-dropdown-menu');
      const targetDiv = targetLi.querySelector('.navbar-desktop-menu-dropdown-items');
      targetDiv.classList.toggle('active');
    } else if (e.target.closest('li.navbar-desktop-menu-dropdown-item') && e.target.nodeName === 'LI') {
      const targetDiv = document.querySelector('.navbar-desktop-menu-dropdown-items');
      targetDiv.classList.remove('active');
    } else {
      const targetDiv = document.querySelector('.navbar-desktop-menu-dropdown-items');
      targetDiv.classList.remove('active');
    }
  };
  
  document.body.addEventListener('click', handleDropdownClick);

  const handleDrawerClick = () => {
    setShopbyHidden(false)
    const targetDiv = document.querySelector('.navbar-mobile-menu-drawer')
    targetDiv.classList.remove('slide-in-left')
  }

  const handleDrawerBackClick = () => {
    setShopbyHidden(true)
    const targetDiv = document.querySelector('.navbar-mobile-menu-drawer')
    targetDiv.classList.add('slide-in-left')
  }

  useEffect(() => {
    if (cartDetails) {
      setShowNav(true);
      const timeoutId = setTimeout(() => {
        setShowNav(false);
        setCartDetails(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [cartDetails]);
  

  const handleCartClick = (e) => {
    if (e.target.classList.contains('cart-open')) {
      const targetDiv = document.querySelector('.navbar-cart-details-wrapper')
      targetDiv.classList.add('active')
      return;
    }
    else if (e.target.closest('.navbar-cart-details-wrapper-continue')) {
      const targetDiv = document.querySelector('.navbar-cart-details-wrapper')
      targetDiv.classList.remove('active')
      return;
    } 
    else if (e.target.closest('.navbar-cart-details-wrapper-checkout')) {
      const targetDiv = document.querySelector('.navbar-cart-details-wrapper')
      targetDiv.classList.remove('active')
      return;
    } 
    else if (e.target.closest('.navbar-cart-details-wrapper')  ) {
      const targetDiv = document.querySelector('.navbar-cart-details-wrapper')
      targetDiv.classList.add('active')
      return;
    }
    else {
      const targetDiv = document.querySelector('.navbar-cart-details-wrapper');
      targetDiv.classList.remove('active');
    }
  };


  document.body.addEventListener('click', handleCartClick);

  return (
    <div className={`navbar ${scrollUp ? 'navbar-scroll-up' : ''} ${showNav ? 'show-nav' : ''}`}>      
      <div className={`navbar-cart-details-wrapper cart-open ${cartDetails ? 'active' : ''}`}>
        <div className="navbar-cart-details-wrapper-header">
          <div><img src={check} alt="" />Item added to your cart</div>
          <img className='navbar-cart-details-wrapper-continue' src={close} onClick={handleCartClick} alt="" />
        </div>
        <div className="navbar-cart-details-wrapper-items">
        {products
          .slice()
          .sort((a, b) => {
            const aTimestamp = addToCartItems[a.id]?.addedTimestamp || 0;
            const bTimestamp = addToCartItems[b.id]?.addedTimestamp || 0;
            return bTimestamp - aTimestamp;
          })
          .map((item) => {
            const sizes = ['S', 'M', 'L'];
            return (
              <div key={item.id}>
                {sizes.map((size) => (
                  addToCartItems[item.id] && addToCartItems[item.id][size] > 0 && (
                    <div className='navbar-cart-details-wrapper-item' key={item.id + size}>
                      <img src={products[item.id-1].images[0]} alt="" /> 
                      <div className="navbar-cart-details-wrapper-item-detail">
                        <h3>{products[item.id-1].name}</h3>
                        <div className="navbar-cart-details-wrapper-item-detail-quant-size">
                          <p>Size: {size}</p>
                          <p>Quantity: {addToCartItems[item.id][size]}</p>
                        </div>
                        <div className="navbar-cart-details-wrapper-item-detail-price">
                          <p>${addToCartItems[item.id][size] * products[item.id - 1].price}.00 USD</p>
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>
            );
          })}
        </div>
        <div className="navbar-cart-details-wrapper-total">
          Total: ${getTotalCartAmount(addToCartItems)}.00 USD
        </div>

        <div className="navbar-cart-details-wrapper-shipping">
        { (200 - getTotalCartAmount(addToCartItems)) > 0 ? (
          <span>Buy ${ (200 - getTotalCartAmount(addToCartItems)) }.00 USD more to enjoy FREE EXPRESS SHIPPING!</span>
        ) : (
          <span>Congrats! You get FREE EXPRESS SHIPPING!</span>
        ) }
        </div>
        <div className="navbar-cart-details-wrapper-button">
          <Link onClick={handleScrollToTop} to="/cart">
            <button onClick={handleCartClick} className='navbar-cart-details-wrapper-checkout'>Check out</button>
          </Link>
        </div>
        <div onClick={handleCartClick} className="navbar-cart-details-wrapper-continue">
          Continue shopping
        </div>
      </div>
      <div className="navbar-announcement">
        Free shipping on all orders over $200.00 USD
      </div>
      <div className="navbar-items">
        <div className="navbar-mobile-menu">
          <img onClick={handleMenuClick} src={hidden ? menu : close} alt="menu icon" />
        </div>
        <div className="navbar-search-cart">
          <img src={search} alt="search icon" />
          <div className='navbar-cart cart-open' onClick={handleCartClick}>
            <img className='cart-open' src={basket} alt="basket icon" />
            <p className='cart-open'>{getTotalCartItems(addToCartItems)}</p>
          </div>
        </div>
        <div className="navbar-logo">
          <Link onClick={handleScrollToTop} to='/'><img src={logo} alt="logo" /></Link>
        </div>
      </div>
      <div className="navbar-desktop-menu">
        <ul>
          <li><Link onClick={handleScrollToTop} style={{ textDecoration: 'none'}} to='/'>HOME</Link></li>
          <li onClick={handleDropdownClick} className='navbar-desktop-menu-dropdown-menu'>SHOP BY 
            <img className='img' src={arrow} alt="drop down menu" />
            <div className="navbar-desktop-menu-dropdown-items">
            <ul>
              <li className="navbar-desktop-menu-dropdown-item"><Link onClick={handleScrollToTop} style={{ textDecoration: 'none' }} to='/all'>Shop All</Link></li>
              <li className="navbar-desktop-menu-dropdown-item"><Link onClick={handleScrollToTop} style={{ textDecoration: 'none' }} to='/new'>New Arrivals</Link></li>
              <li className="navbar-desktop-menu-dropdown-item"><Link onClick={handleScrollToTop} style={{ textDecoration: 'none' }} to='/popular'>Best Sellers</Link></li>
              <li className="navbar-desktop-menu-dropdown-item"><Link onClick={handleScrollToTop} style={{ textDecoration: 'none' }} to='/sale'>Sale</Link></li>
              <li className="navbar-desktop-menu-dropdown-item"><Link onClick={handleScrollToTop} style={{ textDecoration: 'none' }} to='/exclusive'>Limited Edition</Link></li>
            </ul>
            </div>
          </li>
          <li><Link onClick={handleScrollToTop} style={{ textDecoration: 'none'}} to='/about'>ABOUT</Link></li>
          <li><Link onClick={handleScrollToTop} style={{ textDecoration: 'none'}} to='/blog'>BLOG</Link></li>
          <li><Link onClick={handleScrollToTop} style={{ textDecoration: 'none'}} to='/contact'>CONTACT</Link></li>
        </ul>
      </div>
      <div className={`navbar-mobile-menu-drawer slide-in-left ${hidden ? 'hidden' : ''}`}>
        <div className='navbar-mobile-menu-drawer-items'>
          <ul>
          <li><Link onClick={handleScrollToTop} style={{ textDecoration: 'none'}} to='/'>HOME</Link></li>
          <li onClick={handleDrawerClick} className='navbar-mobile-menu-drawer-shopall do-not-close'><Link onClick={handleScrollToTop} style={{ textDecoration: 'none'}} to='/'>SHOP BY <img src={mobile_arrow} alt="arrow icon" /></Link></li>
          <li><Link onClick={handleScrollToTop} style={{ textDecoration: 'none'}} to='/about'>ABOUT</Link></li>
          <li><Link onClick={handleScrollToTop} style={{ textDecoration: 'none'}} to='/blog'>BLOG</Link></li>
          <li><Link onClick={handleScrollToTop} style={{ textDecoration: 'none'}} to='/contact'>CONTACT</Link></li>
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
        <div className={`navbar-mobile-menu-drawer-shopby slide-in-right  ${shopbyHidden ? 'hidden' : ''}`}>
        <ul>
          <li onClick={handleDrawerBackClick} className='navbar-mobile-menu-drawer-shopby-back do-not-close'><Link style={{ textDecoration:'none' }} to='/'><img src={mobile_arrow} alt="" />Back</Link></li>
          <li><Link onClick={handleScrollToTop} style={{ textDecoration:'none' }} to='/all'>Shop All</Link></li>
          <li><Link onClick={handleScrollToTop} style={{ textDecoration:'none' }} to='/new'>New Arrivals</Link></li>
          <li><Link onClick={handleScrollToTop} style={{ textDecoration:'none' }} to='/popular'>Best Sellers</Link></li>
          <li><Link onClick={handleScrollToTop} style={{ textDecoration:'none' }} to='/sale'>Sale</Link></li>
          <li><Link onClick={handleScrollToTop} style={{ textDecoration:'none' }} to='/exclusive'>Limited Edition</Link></li>
        </ul>
      </div>
      </div>

    </div>
  )
}

export default Navbar