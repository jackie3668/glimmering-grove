import React from 'react'
import './Home.css'
import { Featured, Hero, ScrollingBar, Collections, Reviews, AboutUs, Newsletter } from '../../components'

const Home = () => {

  return (
    <div className='home'>
      <Hero/>
      <ScrollingBar />
      <Collections />
      <Featured />
      <Reviews />
      <AboutUs />
      <Newsletter />
    </div>
  )
}

export default Home