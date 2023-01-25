import React from 'react'
import About from './About'
import Blog from './Blog'
import Courses from './Courses'
import Footer from './Footer'
import HomeDetails from './HomeDetails'
import Newsletter from './Newsletter'
import Pricing from './Pricing'
import Testimonal from './Testimonal'

export default function Home() {
  return (
    <div className="App">
      <div id="home" className='bg-img-home'>
        <HomeDetails />
        <About />
        <Courses/>
        <Testimonal/>
        <Blog/>
        <Pricing/>
        <Newsletter/>
        <Footer/>
      </div>
    </div>
  )
}
