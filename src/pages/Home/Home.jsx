import React from 'react'
import './Home.css'
import { Hero, ScrollingBar } from '../../components'


const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <ScrollingBar />
    </div>
  )
}

export default Home