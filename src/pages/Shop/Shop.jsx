import React, { useState, useEffect, useRef } from 'react'
import './Shop.css'
import products from '../../data/products'
import { Item } from '../../components'
import arrow from '../../asset/ui/arrow-down-sign-to-navigate.png'

const Shop = ( props ) => {
  const [visibleItems, setVisibleItems] = useState(8)
  const [showButton, setShowButton] = useState(true)
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [sortOption, setSortOption] = useState('default')
  const [filterOption, setFilterOption] = useState('all')
  const [combinedProducts, setCombinedProducts] = useState(
    products.filter((item) => item.category.includes(props.category))
  );

  useEffect(() => {
    setShowButton(visibleItems < combinedProducts.length);
  }, [visibleItems, combinedProducts]);

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
  const handleFilter = (e) => {

    setVisibleItems(8);
    const selectedFilter = e.target.value;
    setFilterOption(selectedFilter);
    let filteredProducts = products.filter((item) => item.category.includes(selectedFilter));

    const sortedProducts = filteredProducts.sort((a, b) => {
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortOption === 'lowHigh') {
        return a.price - b.price;
      } else if (sortOption === 'highLow') {
        return b.price - a.price;
      }
      return 0;
    });

    setCombinedProducts(sortedProducts);
    setShowButton(visibleItems < sortedProducts.length);
  };

  const handleSort = (e) => {
    setVisibleItems(8);
    setSortOption(e.target.value);

    const sortedProducts = combinedProducts.sort((a, b) => {
      if (e.target.value === 'name') {
        return a.name.localeCompare(b.name);
      } else if (e.target.value === 'lowHigh') {
        return a.price - b.price;
      } else if (e.target.value === 'highLow') {
        return b.price - a.price;
      }
      return 0;
    });
    setCombinedProducts(sortedProducts);
    setShowButton(visibleItems < sortedProducts.length);
  };

  return (
    <div className='items-container shop'>
      <h1>{props.category.toUpperCase()}</h1> 
      <div className='shop-filter-sort'>

          { props.category === 'all' && (<div className='shop-filter'>          
            <p>Filter:</p>
            <select name="" id="" value={filterOption} onChange={handleFilter}>
              <option value="all">All</option>
              <option value="new">New</option>
              <option value="popular">Best Seller</option>
              <option value="sale">Sale</option>
              <option value="exclusive">Limited Edition</option>
            </select>
          </div>)}
   
        <div className="shop-sort">
          <label htmlFor="sortOption">Sort:</label>
          <select id="sortOption" value={sortOption} onChange={handleSort}>
            <option value="default">Default</option>
            <option value="name">Name</option>
            <option value="lowHigh">Price, low to high</option>
            <option value="highLow">Price, high to low</option>
          </select>
        </div>
      </div>
      <div className={`scroll-to-top ${showScrollButton ? 'active' : ''}`} onClick={handleScroll}>
        <img src={arrow} alt="" />
      </div>
      <div className='item-wrapper'>
      {combinedProducts.slice(0, visibleItems).map((item, index) => (
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
      <p className={`end ${showButton? 'hidden' : ''}`}>--End of page--</p>
    </div>
  )
}

export default Shop