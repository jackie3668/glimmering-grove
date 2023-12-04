import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import products from '../../data/products';
import './Product.css'
import arrow from '../../asset/ui/arrow-down-sign-to-navigate.png'

const Product = () => {
    const {productId} = useParams();
    const product = products.find((e) => e.id === Number(productId))
    const [imageIndex, setImageIndex] = useState(0)
    const [scrollIndex, setScrollIndex] = useState(0)

    const handleImageClick = (e) => {
        setImageIndex(e.target.id)
        const curHighlight = document.querySelector('.highlight')
        console.log(curHighlight);
        curHighlight.classList.remove('highlight')
        e.target.classList.add('highlight')
    }

    const handleLeftScroll = (e) => {
        if (scrollIndex  > 0) {
            setScrollIndex(scrollIndex-1)
        }
    }
    
    const handleRightScroll = (e) => {
        console.log(e.target);
        if ((scrollIndex + 4) < product.images.length) {
            setScrollIndex(scrollIndex+1)
        }
    }
  return (
    <div className='product'>
        <div className='product-breadcrums'>
            <Link to='/'>Home</Link> <img src={arrow} alt="" /> 
            <Link to='/all'>Shop</Link> <img src={arrow} alt="" />
            {product.name} 
        </div>
        <div className='product-details'>
            <div className='product-details-all-images'>
                <img className='product-details-main-img' src={product.images[imageIndex]} alt="" />
                <div className='product-details-img'>
                {product.images.slice(scrollIndex, scrollIndex + 4).map((item, index) => (
                    <img key={index} id={index} src={item} className={`${index === 0 ? 'highlight' : ''}`} alt={`Product Image ${index + 1}`} onClick={handleImageClick} />
                ))}
                    <div className="product-details-img-scroll-right" onClick={handleRightScroll}>
                        <img src={arrow} alt="" />
                    </div>
                    <div className="product-details-img-scroll-left" onClick={handleLeftScroll}>
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </div>
            <div className="product-details-info">
                <h1>{product.name}</h1>
                <div className="product-details-info-prices">
                    <h3 className='product-details-info-new-price'>${product.price} USD</h3>
                    <h3 className='product-details-info-old-price'>${product.category.includes('sale') && product.old_price} USD</h3>
                </div>
                <div className="product-details-info-sizes">
                    <p>Size</p>
                    <div className="product-details-info-size-wrapper">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                    </div>
                </div>
                <div className="product-details-info-quant">
                    <p className='product-details-info-quant-text'>Quantity</p>
                    <div className="product-details-info-quant-box">
                        <p className='product-details-info-quant-icon'>-</p>
                        <p className='product-details-info-quant-quant-text'>1</p>
                        <p className='product-details-info-quant-icon'>+</p>
                    </div>
                </div>
                <div className="product-details-info-buttons">
                    <button>Add to cart</button>
                    <button>But it now</button>
                </div>
                <div className="product-details-info-description">
                    <p>
                    {product.description}
                    </p>
                </div>
                <div className="product-details-info-collapsible">
                    <div className='product-details-info-collapsible-wrapper'>
                        <h3>Material Information <span>+</span></h3>
                        <p>answer</p>
                    </div>
                    <div className='product-details-info-collapsible-wrapper'>
                        <h3>Care Instructions</h3>
                        <p>answer</p>
                    </div>
                    <div className='product-details-info-collapsible-wrapper'>
                        <h3>Shipping Policy</h3>
                        <p>answer</p>
                    </div>
                    <div className='product-details-info-collapsible-wrapper'>
                        <h3>Return and Exchange</h3>
                        <p>answer</p>
                    </div>
                </div>




            </div>
        </div>
    </div>
  )
}

export default Product