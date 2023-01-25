import React from 'react'
import Footer from '../Home/Footer'
import Newsletter from '../Home/Newsletter'

export default function PricingHome() {
    return (
        <div id="home" className='bg-img-courses'>
            <div className="ex-courses justify-content-center" style={{ height: '100vh', paddingTop: '28rem' }}>
                <h1 style={{ color: 'white', fontWeight: '500', letterSpacing: '0.1rem' }} className="text-center">PRICING</h1>
                <h1 style={{ fontWeight: '900', letterSpacing: '0.1rem', fontSize: '5rem', color: 'white' }} className="py-1 text-center">Choose the Right Plan</h1>
            </div>
            <div className="container my-5">
                <div className="row justify-content-center overflow-hidden">
                    <div className="col-lg-3 col-12">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h4 className="card-title mt-4 text-center" style={{ lineHeight: '40px' }}>BASIC PLAN</h4>
                                <h1 className='card-title mt-4 text-center' style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}> Rs 300</h1>
                                <p className="card-text mt-3" style={{ color: 'grey', lineHeight: '35px' }}>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, blanditiis!</p>
                                <a href="/" style={{ border: '2px solid var(--primary-color)', fontWeight: 'bold', fontSize: '1.1rem', width: '100%' }} className="btn bg-light mt-4">GET STARTED</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h4 className="card-title mt-4 text-center" style={{ lineHeight: '40px' }}>BEGINNER PLAN</h4>
                                <h1 className='card-title mt-4 text-center' style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}> Rs 500</h1>
                                <p className="card-text mt-3" style={{ color: 'grey', lineHeight: '35px' }}>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, blanditiis!</p>
                                <a href="/" style={{ border: '2px solid var(--primary-color)', fontWeight: 'bold', fontSize: '1.1rem', width: '100%' }} className="btn bg-light mt-4">GET STARTED</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h4 className="card-title mt-4 text-center" style={{ lineHeight: '40px' }}>PREMIUM PLAN</h4>
                                <h1 className='card-title mt-4 text-center' style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}> Rs 700</h1>
                                <p className="card-text mt-3" style={{ color: 'grey', lineHeight: '35px' }}>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, blanditiis!</p>
                                <a href="/" style={{ border: '2px solid var(--primary-color)', fontWeight: 'bold', fontSize: '1.1rem', width: '100%' }} className="btn bg-light mt-4">GET STARTED</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h4 className="card-title mt-4 text-center" style={{ lineHeight: '40px' }}>ULTIMATE PLAN</h4>
                                <h1 className='card-title mt-4 text-center' style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}> Rs 900</h1>
                                <p className="card-text mt-3" style={{ color: 'grey', lineHeight: '35px' }}>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, blanditiis!</p>
                                <a href="/" style={{ border: '2px solid var(--primary-color)', fontWeight: 'bold', fontSize: '1.1rem', width: '100%' }} className="btn bg-light mt-4">GET STARTED</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-center"
                        style={{
                            color: "#007c7c",
                            lineHeight: "40px",
                            marginTop: "7rem",
                            fontWeight: "600",
                        }}>
                        Frequently Asked Questions
                    </h1>
            <div class="accordion accordion-flush my-5 container" id="accordionFlushExample" style={{overflow: 'hidden' }}>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            1. How to get the nearest hospital with beds available ?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            2. how to get government hospitals with beds available ?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            3. How to check availability of blood in bloodbanks ?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            4. Is oxygen available in nearest hospitals ?
                        </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingFive">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            5. Can we book our bed from here ?
                        </button>
                    </h2>
                    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingSix">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            6. How to see current active  no. of doctors ?
                        </button>
                    </h2>
                    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>

            <Newsletter />
            <Footer />
        </div>
    )
}
