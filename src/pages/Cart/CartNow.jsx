import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext';
import './Cart.css'
import trash from '../../asset/ui/trash.png'

const CartNow = () => {
  const { cartDetails, setCartDetails, setBuyNowItems, products, addToCartItems, buyNowItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems } = useContext(ShopContext);

  const handleQuantityChange = (itemID, size, action) => {
    if (action === 'decrement') {
      removeFromCart(itemID, size, 'buyNow', 1);
    } else if (action === 'increment') {
      addToCart(itemID, size, 'buyNow', 1);
    }
  };

  const handleClear = (itemID, size) => {
    setBuyNowItems((prev) => ({
      ...prev,
      [itemID]: {
        ...prev[itemID],
        [size]: 0,
      },
    }));
  };
  
  return (
    <div className='cart'>
      <div className="cart-header">
        <Link to='/all'><p>Back to shopping</p></Link>
        <h1>Your Cart</h1>
      </div>
      <div className="cart-wrapper">
        {products.map((item) => {
          const sizes = ['S', 'M', 'L']
          return (
            <div key={item.id}>
              {sizes.map((size) => (
                  buyNowItems[item.id] && buyNowItems[item.id][size] > 0 && (
                    <div className='cart-details-wrapper-item' key={item.id + size}>
                      <img src={products[item.id-1].images[0]} alt="" /> 
                        <div className="cart-details-wrapper-item-detail-size-name-quant">
                          <div className="cart-details-wrapper-item-detail-size-name">
                            <h3>{products[item.id-1].name}</h3>
                            <p>Size: {size}</p>
                          </div>
                
                        </div>
                        <div className="cart-details-wrapper-item-detail-price">
                          <p>${buyNowItems[item.id][size] * products[item.id - 1].price}.00 USD</p>
                          <div className="cart-details-info-quant-box">
                            <p
                                className="cart-details-info-quant-icon"
                                onClick={() => handleQuantityChange(item.id, size, 'decrement')}
                            >
                                -
                            </p>
                            <p className="cart-details-info-quant-number">{buyNowItems[item.id][size]}</p>
                            <p
                                className="cart-details-info-quant-icon"
                                onClick={() => handleQuantityChange(item.id, size, 'increment')}
                            >
                                +
                            </p>
                          </div>
                          <img onClick={() => handleClear(item.id, size)} src={trash} alt="" />
                        </div>
                    </div>
                  )
                ))}
              </div>
            );
          })}
      </div>
      <div className='cart-checkout'>
          <div className='cart-checkout-total'>
            <h3>Total: ${getTotalCartAmount(buyNowItems)}.00 USD</h3>
          </div>
          <div className="cart-checkout-promo-section">
            <div className="cart-checkout-promo">
              <h4>Coupon Code</h4>
              <div className="cart-checkout-promo-wrapper">
                <input type="text" placeholder='Coupon Code' />
                <button>Submit</button>
              </div>
            </div>
            <div className="cart-checkout-promo">
              <h4>Gift Card</h4>
              <div className="cart-checkout-promo-wrapper">
                <input type="text" placeholder='Gift Card' />
                <button>Submit</button>
              </div>
            </div>
            <div className="cart-checkout-button">
              <button>Check Out</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CartNow