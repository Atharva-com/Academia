import React from 'react'

export default function Pricing() {
  return (
    <div>
        <h4 style={{ color: 'var(--primary-color)', fontWeight: '500', letterSpacing: '0.1rem' }} className="text-center">OUR PRICING</h4>
            <h1 style={{ fontWeight: '900', letterSpacing: '0.1rem' }} className="py-3 text-center">Pricing & Packages</h1>
            <div className="container">
                <div className="row justify-content-center overflow-hidden">
                    <div className="col-lg-3 col-12">
                        <div  className="card" style={{ width: '18rem' }}>
                            <div  className="card-body">
                                <h4  className="card-title mt-4 text-center" style={{lineHeight: '40px'}}>BASIC PLAN</h4>
                                <h1 className='card-title mt-4 text-center' style={{color: 'var(--primary-color)', fontWeight: 'bold'}}> Rs 300</h1>
                                <p  className="card-text mt-3" style={{color: 'grey', lineHeight: '35px'}}>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, blanditiis!</p>
                                <a href="/" style={{border: '2px solid var(--primary-color)', fontWeight: 'bold', fontSize: '1.1rem', width: '100%'}}  className="btn bg-light mt-4">GET STARTED</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12">
                        <div  className="card" style={{ width: '18rem' }}>
                            <div  className="card-body">
                                <h4  className="card-title mt-4 text-center" style={{lineHeight: '40px'}}>BEGINNER PLAN</h4>
                                <h1 className='card-title mt-4 text-center' style={{color: 'var(--primary-color)', fontWeight: 'bold'}}> Rs 500</h1>
                                <p  className="card-text mt-3" style={{color: 'grey', lineHeight: '35px'}}>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, blanditiis!</p>
                                <a href="/" style={{border: '2px solid var(--primary-color)', fontWeight: 'bold', fontSize: '1.1rem', width: '100%'}}  className="btn bg-light mt-4">GET STARTED</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12">
                        <div  className="card" style={{ width: '18rem' }}>
                            <div  className="card-body">
                                <h4  className="card-title mt-4 text-center" style={{lineHeight: '40px'}}>PREMIUM PLAN</h4>
                                <h1 className='card-title mt-4 text-center' style={{color: 'var(--primary-color)', fontWeight: 'bold'}}> Rs 700</h1>
                                <p  className="card-text mt-3" style={{color: 'grey', lineHeight: '35px'}}>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, blanditiis!</p>
                                <a href="/" style={{border: '2px solid var(--primary-color)', fontWeight: 'bold', fontSize: '1.1rem', width: '100%'}}  className="btn bg-light mt-4">GET STARTED</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12">
                        <div  className="card" style={{ width: '18rem' }}>
                            <div  className="card-body">
                                <h4  className="card-title mt-4 text-center" style={{lineHeight: '40px'}}>ULTIMATE PLAN</h4>
                                <h1 className='card-title mt-4 text-center' style={{color: 'var(--primary-color)', fontWeight: 'bold'}}> Rs 900</h1>
                                <p  className="card-text mt-3" style={{color: 'grey', lineHeight: '35px'}}>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, blanditiis!</p>
                                <a href="/" style={{border: '2px solid var(--primary-color)', fontWeight: 'bold', fontSize: '1.1rem', width: '100%'}}  className="btn bg-light mt-4">GET STARTED</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
