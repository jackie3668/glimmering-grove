import React, { useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import products from '../../data/products';
import './Product.css'
import arrow from '../../asset/ui/arrow-down-sign-to-navigate.png'
import open from '../../asset/ui/add.png'
import close from '../../asset/ui/remove.png'
import diamond_ring from '../../asset/ui/diamond-ring.png'
import diamond from '../../asset/ui/diamond.png'
import fast from '../../asset/ui/fast.png'
import product_return from '../../asset/ui/product-return.png'


const Product = () => {
    const { products: contextProducts } = useContext(ShopContext);
    const { addToCartItems, buyNowItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems } = useContext(ShopContext);
    const { productId } = useParams();
    const product = contextProducts.find((e) => e.id === Number(productId));
    const [imageIndex, setImageIndex] = useState(0);
    const [sectionOpen, setSectionOpen] = useState(false);
    const [selectedSize, setSelectedSize] = useState('M'); 
    const [selectedQuantity, setSelectedQuantity] = useState(1); 
  
    const handleImageClick = (e) => {
        setImageIndex((prevIndex) => {
            const newIndex = e.target.id;
            const curHighlight = document.querySelector('.highlight');
            if (curHighlight) {
                curHighlight.classList.remove('highlight');
            }
            e.target.classList.add('highlight');
            return newIndex;
        });
    };
    

    const handleLeftScroll = () => {
        if (imageIndex > 0) {
            setImageIndex((prevIndex) => {
                const curHighlight = document.querySelector('.highlight');
                if (curHighlight) {
                    curHighlight.classList.remove('highlight');
                }
    
                const nextIndex = prevIndex - 1;
                const nextHighlight = document.querySelector(`[id="${nextIndex}"]`);
    
                if (nextHighlight) {
                    nextHighlight.classList.add('highlight');
                }
    
                return nextIndex;
            });
        } else {
            setImageIndex(product.images.length - 1);
    
            const curHighlight = document.querySelector('.highlight');
            if (curHighlight) {
                curHighlight.classList.remove('highlight');
            }
    
            const lastHighlight = document.querySelector(`[id="${product.images.length - 1}"]`);
            if (lastHighlight) {
                lastHighlight.classList.add('highlight');
            }
        }
    };
    
    const handleRightScroll = () => {
        if (imageIndex < product.images.length - 1) {
            setImageIndex((prevIndex) => {
                const curHighlight = document.querySelector('.highlight');
                if (curHighlight) {
                    curHighlight.classList.remove('highlight');
                }
    
                const nextIndex = prevIndex + 1;
                const nextHighlight = document.querySelector(`[id="${nextIndex}"]`);
    
                if (nextHighlight) {
                    nextHighlight.classList.add('highlight');
                }
    
                return nextIndex;
            });
        } else {
            setImageIndex(0)
            const curHighlight = document.querySelector('.highlight');
            if (curHighlight) {
                curHighlight.classList.remove('highlight');
            }
    
            const firstHighlight = document.querySelector(`[id="0"]`);
            if (firstHighlight) {
                firstHighlight.classList.add('highlight');
            }
        }
    };
    
    const handleCollapsibleClick = () => {
        setSectionOpen(!sectionOpen)
    }

    const handleScrollToTop = (e) => {
        window.scrollTo({
          top: 0
        });
      }
    
      
      const handleSizeChange = (size) => {
        setSelectedSize(size);
      };
    
      const handleQuantityChange = (quantity) => {
        setSelectedQuantity(quantity);
      };
    
      const handleAddToCart = () => {
        addToCart(product.id, selectedSize, 'addToCart', selectedQuantity);
      };
    
      const handleBuyNow = () => {
        addToCart(product.id, selectedSize, 'buyNow', selectedQuantity);
      };
    
  return (
    <div className='product'>
        <div className='product-breadcrums'>
            <Link to='/'>Home</Link> <img src={arrow} alt="" /> 
            <Link to='/all'>Shop</Link> <img src={arrow} alt="" />
            {product.name} 
        </div>
        <div className='product-details'>
            <h1 className='product-details-mobile-header'>{product.name}{getTotalCartItems()}
                {product.category.includes('sale') &&
                <div className="product-details-mobile-item-sale-tag">Sale</div>
                }
            </h1>
            <div className='product-details-all-images'>
                <div className='product-details-main-img-wrapper'>
                    <img className='product-details-main-img' src={product.images[imageIndex]} alt="" />
                    <img src={arrow}  className="product-details-img-scroll-right" onClick={handleRightScroll} alt="" />
                    <img className="product-details-img-scroll-left" src={arrow} onClick={handleLeftScroll} alt="" />
                </div>
                <div className='product-details-img'>
                    {
                    product.images.map((item, index) => (
                        <img
                            key={index}
                            id={index}
                            src={item}
                            className={`${index === imageIndex ? 'highlight' : ''}`}
                            alt={`Product Image ${index + 1}`}
                            onClick={handleImageClick}
                        />
                    ))
                    
                    }
                </div>
            </div>
            <div className="product-details-info">
                <h1>{product.name}</h1>
                <div className="product-details-info-prices">
                    <h3 className='product-details-info-new-price'>${product.price} USD</h3>
                {product.category.includes('sale') && <h3 className='product-details-info-old-price'> ${product.old_price} USD</h3>} 
                </div>
                <div className="product-details-info-sizes">
                    <p>Size</p>
                    <div className="product-details-info-size-wrapper">
                        <p
                            className={`${selectedSize === 'S' ? 'selected' : ''}`}
                            onClick={() => handleSizeChange('S')}
                        >
                            S
                        </p>
                        <p
                            className={`${selectedSize === 'M' ? 'selected' : ''}`}
                            onClick={() => handleSizeChange('M')}
                        >
                            M
                        </p>
                        <p
                            className={`${selectedSize === 'L' ? 'selected' : ''}`}
                            onClick={() => handleSizeChange('L')}
                        >
                            L
                        </p>
                    </div>
                </div>
                <div className="product-details-info-quant">
                    <p className='product-details-info-quant-text'>Quantity</p>
                    <div className="product-details-info-quant-box">
                        <p
                            className="product-details-info-quant-icon"
                            onClick={() => handleQuantityChange(Math.max(selectedQuantity - 1, 1))}
                        >
                            -
                        </p>
                        <p className="product-details-info-quant-quant-text">{selectedQuantity}</p>
                        <p
                            className="product-details-info-quant-icon"
                            onClick={() => handleQuantityChange(selectedQuantity + 1)}
                        >
                            +
                        </p>
                    </div>
                </div>
                <div className="product-details-info-buttons">
                    <button onClick={handleAddToCart}>Add to cart</button>
                    <button onClick={handleBuyNow}>Buy it now</button>
                </div>
                <div className="product-details-info-description">
                    <p>
                    {product.description}
                    </p>
                </div>
                <div className="product-details-info-collapsible">
                    <div className='product-details-info-collapsible-wrapper'>
                        <h3><span><img src={diamond_ring} alt="" />Material Information</span> <span><img onClick={handleCollapsibleClick} src={sectionOpen === true ? close : open} alt="" /></span></h3>
                        <p className={`${sectionOpen === true ? "open" : ''}`}>Discover the craftsmanship behind our accessories. Uncover the quality materials used in every piece, ensuring durability and style that stands the test of time.</p>
                    </div>
                    <div className='product-details-info-collapsible-wrapper'>
                        <h3><span><img src={diamond} alt="" />Care Instructions</span> <span><img onClick={handleCollapsibleClick} src={sectionOpen === true ? close : open} alt="" /></span></h3>
                        <p className={`${sectionOpen === true ? "open" : ''}`}>Preserve the beauty of your jewelry with our easy-to-follow care guide. Learn the best practices to keep your accessories shining, ensuring they remain as stunning as the day you got them.</p>
                    </div>
                    <div className='product-details-info-collapsible-wrapper'>
                        <h3><span><img src={fast} alt="" />Shipping Policy</span> <span><img onClick={handleCollapsibleClick} src={sectionOpen === true ? close : open} alt="" /></span></h3>
                        <p className={`${sectionOpen === true ? "open" : ''}`}>Experience hassle-free delivery with our reliable shipping services. Explore our transparent shipping policy, providing you with peace of mind as your fashionable accessories make their way to your doorstep.</p>
                    </div>
                    <div className='product-details-info-collapsible-wrapper'>
                        <h3><span><img src={product_return} alt="" />Return and Exchange</span><span><img onClick={handleCollapsibleClick} src={sectionOpen === true ? close : open} alt="" /></span></h3>
                        <p className={`${sectionOpen === true ? "open" : ''}`}>Embrace worry-free shopping with our flexible return and exchange policy. We're committed to ensuring your satisfaction, offering a seamless process for returns and exchanges to make your experience delightful.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='product-recommendations'>
            <h1>You may also like</h1>
            <div className='product-recommendations-wrapper'>
                {products
                    .slice(products.findIndex(p => p.id === product.id) + 1, products.findIndex(p => p.id === product.id) + 5)
                    .map((item, index) => (
                        <Link key={index} to={`/product/${item.id}`}>
                            <img onClick={handleScrollToTop} src={item.images[0]} alt={`Product ${index + 1}`} />
                        </Link>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default Product