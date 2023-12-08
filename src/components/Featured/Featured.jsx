import React from 'react'
import './Featured.css'
import products from '../../data/products'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'

const Featured = () => {
  const handleScrollToTop = (e) => {
    window.scrollTo({
      top: 0
    });
  }

  const featured = []
  return (
    <div className='items-container'>
      <h1>Trending</h1>
      <div className="item-wrapper">
        {products.map((item, index) => {
          if (featured.length < 4 && item.category.includes('popular')) {
            featured.push(item.id)
            return <Item key={index} id={item.id} name={item.name} image={item.images[0]} price={item.price} old_price={item.old_price} category={item.category}/>
          }
        })}
      </div>
        <Link onClick={handleScrollToTop} to='/new'><button>View all products</button></Link>
    </div>
  )
}

export default Featured