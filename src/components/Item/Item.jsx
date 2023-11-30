import React from 'react'
import './Item.css'

const Item = ( props ) => {
  return (
    <div className='item'>
      <div className="item-image">
        <img src={props.image} alt="" />
        {props.category.includes('sale') &&
            <div className="item-sale-tag">Sale</div>
          }
      </div>
      <p className='item-name'>{props.name}</p>
      <div className="item-prices">
        <p className='item-current-price'>${props.price} USD</p>
        {props.category.includes('sale') &&
          <p className='item-old-price'>${props.old_price} USD</p>
        }
      </div>
    </div>
  )
}

export default Item