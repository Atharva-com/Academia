import React from 'react'
export default function Footer(props) {
    return (
        <div>
            <div
                className="footer"
            >
                <footer
                    className="text-center text-lg-start text-white mt-5"
                    style={{ backgroundColor: "rgb(54, 134, 134)" }}
                >
                    <section
                        className="d-flex justify-content-between p-4"
                        style={{ backgroundColor: 'rgb(15, 83, 83)' }}
                    >
                        <div className="me-5">
                            <span>Get connected with us on social networks:</span>
                        </div>

                        <div>
                            <a href="/" className="text-white me-4">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="/" className="text-white me-4">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="/" className="text-white me-4">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="/" className="text-white me-4">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="/" className="text-white me-4">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="/" className="text-white me-4">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </section>

                    <section className="/">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h2 className="text-uppercase fw-bold">Academia</h2>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{width: '60px', backgroundolor: '#7c4dff', height: '2px'}}
                                    />
                                    <p>
                                        Here you can use rows and columns to organize your footer
                                        content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit.
                                    </p>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h3 className="text-uppercase fw-bold">Useful links</h3>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                    />
                                    <p>
                                        <a href="/Login" className="text-white">&rarr; HOME</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">&rarr; COURSES</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">&rarr; ABOUT</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">&rarr; TEAM</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">&rarr; PRICING</a>
                                    </p>
                                </div>
                                
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h3 className="text-uppercase fw-bold">Useful links</h3>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                    />
                                    <p>
                                        <a href="/Login" className="text-white">&rarr; CONNECT WITH US</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">&rarr; BECOME AN AFFILIATE</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">&rarr; INVESTOR</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">&rarr; HELP</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">&rarr; FAQ's</a>
                                    </p>
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h3 className="text-uppercase fw-bold">Contact</h3>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                    />
                                    <p><i className="fas fa-home mr-3"></i>  Indramani Nagar , Gwalior (M.P.) , India</p>
                                    <p><i className="fas fa-envelope mr-3"></i>  atharvabarve2003@gmail.com</p>
                                    <p><i className="fas fa-envelope mr-3"></i>  sujalforselfuse@gmail.com</p>
                                    <p><i className="fas fa-phone mr-3"></i>  +91 76930-05811</p>
                                    <p><i className="fas fa-print mr-3"></i>  +91 90097-32863</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                    >
                        © 2023 Copyright : Educate Yourself For Better Future . | Academia.in
          
                    </div>
                </footer>
            </div>
        </div>
    )
}
