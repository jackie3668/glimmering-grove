import React, { useState, useEffect } from 'react'
import './Shop.css'
import products from '../../data/products'
import { Item } from '../../components'
import sale_banner  from '../../asset/shop/sale.png'
import exclusive_banner  from '../../asset/shop/exclusive.png'
import popular_banner  from '../../asset/shop/popular.png'
import new_banner from "../../asset/shop/new.png"
import all_banner from "../../asset/shop/all.png"

const Shop = ( props ) => {
  const [visibleItems, setVisibleItems] = useState(8)
  const [showButton, setShowButton] = useState(true)
  const [sortOption, setSortOption] = useState('default')
  const [filterOption, setFilterOption] = useState('all')
  const [combinedProducts, setCombinedProducts] = useState(
    products.filter((item) => item.category.includes(props.category))
  );

  const banners = {
    sale: sale_banner,
    exclusive: exclusive_banner,
    popular: popular_banner,
    new: new_banner,
    all: all_banner
  };
  
  useEffect(() => {
    setShowButton(visibleItems < combinedProducts.length);
  }, [visibleItems, combinedProducts]);

  const handleShowMore = () => {
    setVisibleItems((prev) => (prev + 8))
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
    <div>
      <div className="shop-banner"> <img src={banners[props.category]} alt="" /></div>
      <div className='items-container shop'>
        <div className='shop-filter-sort'>

            { props.category === 'all' && (<div className='shop-filter'>          
              <p>Filter:</p>
              <select name="" id="" value={filterOption} onChange={handleFilter} className="shop-filter-sort-select">
                <option value="all">All</option>
                <option value="new">New</option>
                <option value="popular">Best Seller</option>
                <option value="sale">Sale</option>
                <option value="exclusive">Limited Edition</option>
              </select>
            </div>)}

          <div className="shop-sort">
            <label htmlFor="sortOption">Sort:</label>
            <select id="sortOption" value={sortOption} onChange={handleSort} className="shop-filter-sort-select">
              <option value="default">Default</option>
              <option value="name">Name</option>
              <option value="lowHigh">Price, low to high</option>
              <option value="highLow">Price, high to low</option>
            </select>
          </div>
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
    </div>
    
  )
}

export default Shop