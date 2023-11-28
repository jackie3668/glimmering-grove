import React from 'react'
import './Home.css'
import { Hero, ScrollingBar } from '../../components'
import Collections from '../../components/Collections/Collections'


const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <ScrollingBar />
      <Collections />
    </div>
  )
}

export default Home