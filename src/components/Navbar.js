import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <>
            <div className='container mt-3 text-light bg-img'>
                <div id="main-heading" style={{ display: 'inline-block' }}>
                    <h1 style={{ fontWeight: '900', marginBottom: '0rem' }}>ACADEMIA</h1>
                    <span style={{ fontWeight: '500' }}>ONLINE EDUCATION & LEARNING</span>
                </div>

                <div className="social-link d-flex justify-content-end" style={{ display: 'inline-block' }}>
                    <a href="/" className='nav-link'><i className='fab fa-facebook-f icon'></i></a>
                    <a href="/" className='nav-link'><i className='fab fa-twitter icon'></i></a>
                    <a href="/" className='nav-link'><i className='fab fa-instagram icon'></i></a>
                    <a href="/" className='nav-link'><i className='fab fa-youtube icon'></i></a>
                </div>
            </div>

            <div className="container">
                <nav className="navbar navbar-expand-lg" style={{backgroundColor: 'hsla(0,0%,100%,.2)'}}>
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                            <ul className="navbar-nav p-2 justify-content-center">
                                <li className="nav-item px-2">
                                    <Link className="nav-link text-light" style={{fontSize: '1.1rem', fontWeight: '900', cursor: 'pointer'}} aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link className="nav-link text-light" style={{fontSize: '1.1rem', fontWeight: '900', cursor: 'pointer'}} to="/ExHome">All courses</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link className="nav-link text-light" style={{fontSize: '1.1rem', fontWeight: '900', cursor: 'pointer'}} to="/">About</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link className="nav-link text-light" style={{fontSize: '1.1rem', fontWeight: '900', cursor: 'pointer'}} to="/TeamHome">Team</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link className="nav-link text-light" style={{fontSize: '1.1rem', fontWeight: '900', cursor: 'pointer'}} to="/PricingHome">Pricing</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link className="nav-link text-light" style={{fontSize: '1.1rem', fontWeight: '900', cursor: 'pointer'}} to="/Journal">Journal</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link className="nav-link text-light" style={{fontSize: '1.1rem', fontWeight: '900', cursor: 'pointer'}} to="/">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
