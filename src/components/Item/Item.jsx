import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ( props ) => {
  const handleScrollToTop = (e) => {
    window.scrollTo({
      top: 0
    });
  }
  return (
    <div className='item scale-in-center'>
      <div className="item-image">
      <Link to={`/product/${props.id}`}>
        <img onClick={handleScrollToTop} src={props.image} alt="" />
      </Link>
        {props.category.includes('sale') &&
            <div className="item-sale-tag">Sale</div>
          }
      </div>
      <p className='item-name'>{props.name}</p>
      <div className="item-prices">
        <p className='item-current-price'>${props.price}.00 USD</p>
        {props.category.includes('sale') &&
          <p className='item-old-price'>${props.old_price}.00 USD</p>
        }
      </div>
    </div>
  )
}

export default Item