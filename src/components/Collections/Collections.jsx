import React from 'react'
import './Collections.css'
import { Link } from 'react-router-dom'
import collection_1 from '../../asset/collections/1.png'
import collection_2 from '../../asset/collections/2.png'
import collection_3 from '../../asset/collections/3.png'
import collection_4 from '../../asset/collections/4.png'
import arrow from '../../asset/ui/right-arrow.png'
const Collections = () => {
  const handleScrollToTop = (e) => {
    window.scrollTo({
      top: 0
    });
  }

  return (
    <div className='collections'>
      <h1>Collections</h1>
      <div className="collections-display">
        <div className="collection-wrapper">
          <Link onClick={handleScrollToTop} to='/new'><img src={collection_1} alt="collection" /></Link>
          <Link onClick={handleScrollToTop} to='/new'><p>New Arrival <img src={arrow} alt="" /></p></Link>
        </div>
        <div className="collection-wrapper">
          <Link onClick={handleScrollToTop} to='/popular'><img src={collection_3} alt="collection" /></Link>
          <Link onClick={handleScrollToTop} to='/popular'><p>Best Seller<img src={arrow} alt="" /></p></Link>
        </div>
        <div className="collection-wrapper">
          <Link onClick={handleScrollToTop} to='/sale'><img src={collection_2} alt="collection" /></Link>
          <Link onClick={handleScrollToTop} to='/sale'><p>Sale <img src={arrow} alt="" /></p></Link>
        </div>
        <div className="collection-wrapper">
          <Link onClick={handleScrollToTop} to='/exclusive'><img src={collection_4} alt="collection" /></Link>
          <Link onClick={handleScrollToTop} to='/exclusive'><p>Limited Edition <img src={arrow} alt="" /></p></Link>
        </div>
      </div>
    </div>
  )
}

export default Collections