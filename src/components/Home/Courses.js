import React from 'react'

export default function Courses() {
    return (
        <div className='mt-5'>
            <h4 style={{ color: 'var(--primary-color)', fontWeight: '500', letterSpacing: '0.1rem' }} className="text-center">OUR COURSES</h4>
            <h1 style={{ fontWeight: '900', letterSpacing: '0.1rem' }} className="py-3 text-center">Explore Our Popular Subjects</h1>
            <div className="container">
                <div className="row">
                    <div className="card col-lg-4 col-12 mt-5 d-flex" style={{ display: 'flex', flexDirection: 'row', border: 'none', backgroundColor: 'rgb(229 239 233)', width: '25rem' }}>
                        <div className="course-img">
                            <img src="https://scintillating-smakager-860376.netlify.app/images/courses/c1.png" style={{ height: '70px', width: '70px', marginRight: '5rem', paddingBottom: '0.5rem' }} alt="" />
                        </div>

                        <div className="content card-body my-4" style={{ display: 'flex', flexDirection: 'column'}}>
                            <h4 className='card-title' style={{ fontWeight: '900', letterSpacing: '0.1rem', lineHeight: '35px' }}>INTRODUCTION TO COMPUTER PROGRAMMING</h4>
                            <p className="card-text mt-2">
                                Rating: <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                            </p>
                            <p className='card-text' style={{ lineHeight: '35px', color: '#999',  }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto soluta repellat error, ad ab fugiat. Iste voluptatum laborum accusantium recusandae placeat dolorum .</p>
                            <button className="course-price">$ 10 / ALL Courses</button>
                            <a href="/" className="btn mt-5 bg-light" style={{border: '2px solid var(--primary-color)', fontWeight: 'bold', fontSize: '1.1rem'}}>ENROLL NOW</a>
                        </div>
                    </div>
                    <div className="card col-lg-4 col-12 mt-5 d-flex mx-5" style={{ display: 'flex', flexDirection: 'row', border: 'none', backgroundColor: 'rgb(229 239 233)', width: '25rem' }}>
                        <div className="course-img">
                            <img src="https://scintillating-smakager-860376.netlify.app/images/courses/c3.png" style={{ height: '70px', width: '70px', marginRight: '5rem', paddingBottom: '0.5rem' }} alt="" />
                        </div>
                        <div className="content card-body my-4" style={{ display: 'flex', flexDirection: 'column'}}>
                            <h4 className='card-title' style={{ fontWeight: '900', letterSpacing: '0.1rem', lineHeight: '35px' }}>INTRODUCTION TO C++ LANGUAGE</h4>
                            <p className="card-text mt-5">
                                Rating: <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                            </p>
                            <p className='card-text' style={{ lineHeight: '35px', color: '#999',  }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto soluta repellat error, ad ab fugiat. Iste voluptatum laborum accusantium recusandae placeat dolorum .</p>
                            <button className="course-price">$ 10 / ALL Courses</button>
                            <a href="/" className="btn mt-5 bg-light" style={{border: '2px solid var(--primary-color)', fontWeight: 'bold', fontSize: '1.1rem'}}>ENROLL NOW</a>
                        </div>
                    </div>
                    <div className="card col-lg-4 col-12 mt-5 d-flex" style={{ display: 'flex', flexDirection: 'row', border: 'none', backgroundColor: 'rgb(229 239 233)', width: '25rem' }}>
                        <div className="course-img">
                            <img src="https://scintillating-smakager-860376.netlify.app/images/courses/c2.png" style={{ height: '70px', width: '70px', marginRight: '5rem', paddingBottom: '0.5rem' }} alt="" />
                        </div>
                        <div className="content card-body my-4" style={{ display: 'flex', flexDirection: 'column'}}>
                            <h4 className='card-title' style={{ fontWeight: '900', letterSpacing: '0.1rem', lineHeight: '35px' }}>DATA STRUCTURES AND ALGORITHMS</h4>
                            <p className="card-text mt-5">
                                Rating: <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                            </p>
                            <p className='card-text' style={{ lineHeight: '35px', color: '#999',  }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto soluta repellat error, ad ab fugiat. Iste voluptatum laborum accusantium recusandae placeat dolorum .</p>
                            <button className="course-price">$ 10 / ALL Courses</button>
                            <a href="/" className="btn mt-5 bg-light" style={{border: '2px solid var(--primary-color)', fontWeight: 'bold', fontSize: '1.1rem'}}>ENROLL NOW</a>
                        </div>
                    </div>
                    <div className="card col-lg-4 col-12 mt-5 d-flex" style={{ display: 'flex', flexDirection: 'row', border: 'none', backgroundColor: 'rgb(229 239 233)', width: '25rem' }}>
                        <div className="course-img">
                            <img src="https://scintillating-smakager-860376.netlify.app/images/courses/c1.png" style={{ height: '70px', width: '70px', marginRight: '5rem', paddingBottom: '0.5rem' }} alt="" />
                        </div>

                        <div className="content card-body my-4" style={{ display: 'flex', flexDirection: 'column'}}>
                            <h4 className='card-title' style={{ fontWeight: '900', letterSpacing: '0.1rem', lineHeight: '35px' }}>PYTHON PROGRAMMING</h4>
                            <p className="card-text mt-5">
                                Rating: <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                            </p>
                            <p className='card-text' style={{ lineHeight: '35px', color: '#999',  }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto soluta repellat error, ad ab fugiat. Iste voluptatum laborum accusantium recusandae placeat dolorum .</p>
                            <button className="course-price">$ 10 / ALL Courses</button>
                            <a href="/" className="btn mt-5 bg-light" style={{border: '2px solid var(--primary-color)', fontWeight: 'bold', fontSize: '1.1rem'}}>ENROLL NOW</a>
                        </div>
                    </div>
                    <div className="card col-lg-4 col-12 mt-5 d-flex mx-5" style={{ display: 'flex', flexDirection: 'row', border: 'none', backgroundColor: 'rgb(229 239 233)', width: '25rem' }}>
                        <div className="course-img">
                            <img src="https://scintillating-smakager-860376.netlify.app/images/courses/c3.png" style={{ height: '70px', width: '70px', marginRight: '5rem', paddingBottom: '0.5rem' }} alt="" />
                        </div>
                        <div className="content card-body my-4" style={{ display: 'flex', flexDirection: 'column'}}>
                            <h4 className='card-title' style={{ fontWeight: '900', letterSpacing: '0.1rem', lineHeight: '35px' }}>DATA BASE MANAGEMENT SYSTEM</h4>
                            <p className="card-text mt-2">
                                Rating: <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                            </p>
                            <p className='card-text' style={{ lineHeight: '35px', color: '#999',  }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto soluta repellat error, ad ab fugiat. Iste voluptatum laborum accusantium recusandae placeat dolorum .</p>
                            <button className="course-price">$ 10 / ALL Courses</button>
                            <a href="/" className="btn mt-5 bg-light" style={{border: '2px solid var(--primary-color)', fontWeight: 'bold', fontSize: '1.1rem'}}>ENROLL NOW</a>
                        </div>
                    </div>
                    <div className="card col-lg-4 col-12 mt-5 d-flex" style={{ display: 'flex', flexDirection: 'row', border: 'none', backgroundColor: 'rgb(229 239 233)', width: '25rem' }}>
                        <div className="course-img">
                            <img src="https://scintillating-smakager-860376.netlify.app/images/courses/c2.png" style={{ height: '70px', width: '70px', marginRight: '5rem', paddingBottom: '0.5rem' }} alt="" />
                        </div>
                        <div className="content card-body my-4" style={{ display: 'flex', flexDirection: 'column'}}>
                            <h4 className='card-title' style={{ fontWeight: '900', letterSpacing: '0.1rem', lineHeight: '35px' }}>COMPUTER SYSTEM ORGANISATION</h4>
                            <p className="card-text mt-5">
                                Rating: <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                            </p>
                            <p className='card-text' style={{ lineHeight: '35px', color: '#999',  }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto soluta repellat error, ad ab fugiat. Iste voluptatum laborum accusantium recusandae placeat dolorum .</p>
                            <button className="course-price">$ 10 / ALL Courses</button>
                            <a href="/" className="btn mt-5 bg-light" style={{border: '2px solid var(--primary-color)', fontWeight: 'bold', fontSize: '1.1rem'}}>ENROLL NOW</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
