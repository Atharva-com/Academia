import React from 'react'
import Footer from '../Home/Footer'
import Newsletter from '../Home/Newsletter'

export default function Journal() {
  return (
    <div id="home" className='bg-img-courses'>
            <div className="ex-courses justify-content-center" style={{ height: '100vh', paddingTop: '28rem' }}>
                <h1 style={{ color: 'white', fontWeight: '500', letterSpacing: '0.1rem' }} className="text-center">JOURNAL</h1>
                <h1 style={{ fontWeight: '900', letterSpacing: '0.1rem', fontSize: '5rem', color: 'white' }} className="py-1 text-center">Blogposts</h1>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-12">
                        <div  className="card" style={{ width: '25rem' }}>
                            <img src="https://scintillating-smakager-860376.netlify.app/images/blog/b1.webp"  className="card-img-top" alt="..." />
                            <div  className="card-body">
                                <h3  className="card-title mt-4" style={{lineHeight: '40px'}}>Build Your Dream Software And Engineering Carrer</h3>
                                <p  className="card-text mt-3" style={{color: 'grey', lineHeight: '35px'}}>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, blanditiis!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div  className="card" style={{ width: '25rem' }}>
                            <img src="https://scintillating-smakager-860376.netlify.app/images/blog/b2.webp"  className="card-img-top" alt="..." />
                            <div  className="card-body">
                                <h3  className="card-title mt-4" style={{lineHeight: '40px'}}>Build Your Dream Software And Engineering Carrer</h3>
                                <p  className="card-text mt-3" style={{color: 'grey', lineHeight: '35px'}}>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, blanditiis!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div  className="card" style={{ width: '25rem' }}>
                            <img src="https://scintillating-smakager-860376.netlify.app/images/blog/b3.webp"  className="card-img-top" alt="..." />
                            <div  className="card-body">
                                <h3  className="card-title mt-4" style={{lineHeight: '40px'}}>Build Your Dream Software And Engineering Carrer</h3>
                                <p  className="card-text mt-3" style={{color: 'grey', lineHeight: '35px'}}>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, blanditiis!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div  className="card" style={{ width: '25rem' }}>
                            <img src="https://scintillating-smakager-860376.netlify.app/images/blog/b3.webp"  className="card-img-top" alt="..." />
                            <div  className="card-body">
                                <h3  className="card-title mt-4" style={{lineHeight: '40px'}}>Build Your Dream Software And Engineering Carrer</h3>
                                <p  className="card-text mt-3" style={{color: 'grey', lineHeight: '35px'}}>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, blanditiis!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div  className="card" style={{ width: '25rem' }}>
                            <img src="https://scintillating-smakager-860376.netlify.app/images/blog/b3.webp"  className="card-img-top" alt="..." />
                            <div  className="card-body">
                                <h3  className="card-title mt-4" style={{lineHeight: '40px'}}>Build Your Dream Software And Engineering Carrer</h3>
                                <p  className="card-text mt-3" style={{color: 'grey', lineHeight: '35px'}}>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, blanditiis!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div  className="card" style={{ width: '25rem' }}>
                            <img src="https://scintillating-smakager-860376.netlify.app/images/blog/b3.webp"  className="card-img-top" alt="..." />
                            <div  className="card-body">
                                <h3  className="card-title mt-4" style={{lineHeight: '40px'}}>Build Your Dream Software And Engineering Carrer</h3>
                                <p  className="card-text mt-3" style={{color: 'grey', lineHeight: '35px'}}>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, blanditiis!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Newsletter/>
            <Footer/>
    </div>        
  )
}
