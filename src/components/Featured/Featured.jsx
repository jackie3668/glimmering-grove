import React from 'react'
import './Featured.css'
import products from '../../data/products'
import Item from '../Item/Item'

const Featured = () => {
  const featured = []
  return (
    <div className='featured'>
      <h1>Trending</h1>
      <div className="featured-items">
        {products.map((item, index) => {
          if (featured.length < 4 && item.category.includes('popular')) {
            featured.push(item.id)
            return <Item key={index} id={item.id} name={item.name} image={item.images[0]} price={item.price} old_price={item.old_price} category={item.category}/>
          }
        })}
      </div>
      <button>View all products</button>

    </div>
  )
}

export default Featured