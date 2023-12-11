import React from 'react'
import './Blog.css'
import banner from '../../asset/other/blog_banner.png'
import thumbnail1 from '../../asset/other/1.jpg'
import thumbnail2 from '../../asset/other/2.jpg'
import thumbnail3 from '../../asset/other/3.jpg'
import thumbnail4 from '../../asset/other/4.jpg'
import thumbnail5 from '../../asset/other/5.jpg'
import thumbnail6 from '../../asset/other/6.jpg'
import thumbnail7 from '../../asset/other/7.jpg'
import thumbnail8 from '../../asset/other/8.jpg'
import thumbnail9 from '../../asset/other/9.jpg'
import thumbnail10 from '../../asset/other/10.jpg'

const Blog = () => {
  return (
    <div className='blog'>
      <img className='blog-banner'src={banner} alt="" />
      <div className="blog-container">
      
        <div className="blog-post">
          <img src={thumbnail1} alt="" />
          <h3>Dazzling Diamonds: Unveiling the Art of Timeless Elegance</h3>
          <p>Explore the world of diamonds, from their fascinating history to the latest trends. Discover how these precious gems continue to captivate hearts with their enduring allure.</p>
        </div>
  
        <div className="blog-post">
          <img src={thumbnail2} alt="" />
          <h3>The Power of Pearls: A Timeless Journey of Grace and Glamour</h3>
          <p>Delve into the enchanting realm of pearls, celebrating their symbolic significance and tracing their evolution from classic elegance to modern chic. Uncover the secrets behind their enduring charm.</p>
        </div>

        <div className="blog-post">
          <img src={thumbnail3} alt="" />
          <h3>Bold and Beautiful: The Rise of Statement Jewelry</h3>
          <p>Explore the transformative impact of statement jewelry in the fashion world. From oversized earrings to chunky necklaces, witness how bold accessories redefine personal style with flair and confidence.</p>
        </div>

        <div className="blog-post">
          <img src={thumbnail4} alt="" />
          <h3>Beyond Bling: Exploring the World of Artisanal Jewelry</h3>
          <p>Embark on a journey through the world of artisanal jewelry, where craftsmanship meets creativity. Discover unique designs, hear stories from skilled artisans, and understand the beauty of handcrafted adornments.</p>
        </div>

        <div className="blog-post">
          <img src={thumbnail5} alt="" />
          <h3>Gemstone Magic: Unlocking the Mysteries of Precious Stones</h3>
          <p>Dive into the vibrant world of gemstones, each with its own story and lore. From the healing properties of crystals to the symbolism behind birthstones, uncover the magic that lies within.</p>
        </div>

        <div className="blog-post">
          <img src={thumbnail6} alt="" />
          <h3>Minimalist Marvels: Embracing Simplicity in Jewelry Design</h3>
          <p>Celebrate the beauty of simplicity with minimalist jewelry. Explore how clean lines and understated elegance are making a powerful statement in the world of accessories, redefining the notion of luxury.</p>
        </div>

        <div className="blog-post">
          <img src={thumbnail7} alt="" />
          <h3>Vintage Glam: Rediscovering the Allure of Antique Jewelry</h3>
          <p>Take a step back in time as we explore the charm of vintage jewelry. From Art Deco classics to Victorian treasures, discover the timeless appeal that makes antique pieces enduringly fashionable.</p>
        </div>

        <div className="blog-post">
          <img src={thumbnail8} alt="" />
          <h3>Tech Meets Fashion: The Fusion of Wearable Tech and Jewelry</h3>
          <p>Witness the convergence of technology and style in the realm of wearable jewelry. From smart rings to connected bracelets, delve into the cutting-edge intersection of fashion and innovation.</p>
        </div>

        <div className="blog-post">
          <img src={thumbnail9} alt="" />
          <h3>DIY Chic: Crafting Your Own Signature Jewelry Pieces</h3>
          <p>Unleash your creativity with a guide to DIY jewelry. From beading to wirework, discover how to make personalized accessories that reflect your style, turning everyday materials into wearable art.</p>
        </div>

        <div className="blog-post">
          <img src={thumbnail10} alt="" />
          <h3>Cultural Adornments: Exploring the Significance of Ethnic Jewelry</h3>
          <p>Journey around the globe to uncover the rich tapestry of ethnic jewelry. From tribal traditions to cultural symbolism, explore how these adornments narrate stories of heritage and identity.</p>
        </div>

      </div>
    </div>
  )
}

export default Blog