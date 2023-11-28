import React from 'react'
import './Collections.css'
import collection_1 from '../../asset/collections/1.png'
import collection_2 from '../../asset/collections/2.png'
import collection_3 from '../../asset/collections/3.png'
import collection_4 from '../../asset/collections/4.png'
import arrow from '../../asset/ui/right-arrow.png'
const Collections = () => {
  return (
    <div className='collections'>
      <h1>Collections</h1>
      <div className="collections-display">
        <div className="collection-wrapper">
          <img src={collection_1} alt="collection" />
          <p>New Arrival <img src={arrow} alt="" /></p>
        </div>
        <div className="collection-wrapper">
          <img src={collection_3} alt="collection" />
          <p>Best Seller<img src={arrow} alt="" /></p>
        </div>
        <div className="collection-wrapper">
          <img src={collection_2} alt="collection" />
          <p>Sale <img src={arrow} alt="" /></p>
        </div>
        <div className="collection-wrapper">
          <img src={collection_4} alt="collection" />
          <p>Limited Edition <img src={arrow} alt="" /></p>
        </div>
      </div>
    </div>
  )
}

export default Collections