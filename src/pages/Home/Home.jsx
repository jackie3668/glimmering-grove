import React from 'react'
import './Home.css'
import { Featured, Hero, ScrollingBar } from '../../components'
import Collections from '../../components/Collections/Collections'

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <ScrollingBar />
      <Collections />
      <Featured />
    </div>
  )
}

export default Home