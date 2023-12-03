import React, { useState, useEffect, useRef } from 'react'
import './Shop.css'
import products from '../../data/products'
import { Item } from '../../components'
import arrow from '../../asset/ui/arrow-down-sign-to-navigate.png'

const Shop = ( props ) => {
  const [visibleItems, setVisibleItems] = useState(8)
  const [showButton, setShowButton] = useState(true)
  const [showScrollButton, setShowScrollButton] = useState(false);

  const filteredProducts = products.filter((item) =>
  item.category.includes(props.category))

  useEffect(() => {
    setShowButton(visibleItems < filteredProducts.length);
  }, [visibleItems, filteredProducts]);

  const handleShowMore = () => {
    setVisibleItems((prev) => (prev + 8))
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > window.innerHeight);
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
    <div className='items-container shop'>
      <h1>{props.category.toUpperCase()}</h1>
      <div className={`scroll-to-top ${showScrollButton ? 'active' : ''}`} onClick={handleScroll}>
        <img src={arrow} alt="" />
      </div>
      <div className='item-wrapper'>
        {filteredProducts.slice(0, visibleItems).map((item, index) => (
          <Item
            key={index}
            id={item.id}
            name={item.name}
            image={item.images[0]}
            price={item.price}
            old_price={item.old_price}
            category={item.category}
          />
        ))}
      </div>
      <button className={showButton? '' : 'hidden'} onClick={handleShowMore}>Show more</button>
      <p className={showButton? 'hidden' : ''}>--End of page--</p>
    </div>
  )
}

export default Shop