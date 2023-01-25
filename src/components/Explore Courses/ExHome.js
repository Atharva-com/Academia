import React from 'react'
import Footer from '../Home/Footer'
import Newsletter from '../Home/Newsletter'
import ExCourses from './ExCourses'

export default function ExHome() {
  return (
    <div id="home" className='bg-img-courses'>
        <div className="ex-courses justify-content-center" style={{height: '100vh', paddingTop: '28rem'}}>
            <h1 style={{color: 'white', fontWeight: '500', letterSpacing: '0.1rem'}} className="text-center">COURSES</h1>
            <h1 style={{fontWeight: '900', letterSpacing: '0.1rem', fontSize: '5rem',color: 'white'}} className="py-1 text-center">EXPLORE COURSES</h1>
        </div>
        <ExCourses/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}
