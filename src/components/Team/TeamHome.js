import React from 'react'
import Footer from '../Home/Footer'
import Newsletter from '../Home/Newsletter'

export default function TeamHome() {
  return (
    <div id="home" className='bg-img-courses'>
        <div className="ex-courses justify-content-center" style={{height: '100vh', paddingTop: '28rem'}}>
            <h1 style={{color: 'white', fontWeight: '500', letterSpacing: '0.1rem'}} className="text-center">TEAM</h1>
            <h1 style={{fontWeight: '900', letterSpacing: '0.1rem', fontSize: '5rem',color: 'white'}} className="py-1 text-center">OUR TEAM</h1>
        </div>
        <div className="d-flex container pt-5" style={{gap: '3rem',}}>
            <img src="https://scintillating-smakager-860376.netlify.app/images/team/t2.webp" alt="" style={{height: '25rem', width: '30rem'}}/>
            <div>
                <h1>Mr. Atharva Barve</h1>
                <p style={{lineHeight: '30px'}} className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt alias suscipit magni explicabo sint illum, sed atque id ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam minima, velit rem, enim, blanditiis aperiam sit fugit voluptatem esse ad iure corporis sapiente! Dolores sequi reiciendis culpa possimus repellendus porro ut dignissimos ea explicabo, aliquam illo in dicta autem reprehenderit laboriosam hic eius. Est blanditiis fuga natus vel corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi explicabo minus eaque veniam ratione, aspernatur fugiat aliquid saepe sapiente expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis distinctio dolorum consequatur inventore, natus velit necessitatibus sapiente facere ipsa officiis?</p>
                <span style={{fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '0.1rem', color: 'rgb(97, 124, 108)'}}>Position : Front-End Developer</span>
                <div className="social-link" style={{ position: 'relative', top: '1.5rem'}}>
                    <a href="/" className='nav-link' style={{backgroundColor: 'rgba(10, 9, 9, 0.75)', cursor: 'pointer'}}><i className='fab fa-facebook-f icon' style={{color: 'white', cursor: 'pointer'}}></i></a>
                    <a href="/" className='nav-link' style={{backgroundColor: 'rgba(10, 9, 9, 0.75)', cursor: 'pointer'}}><i className='fab fa-twitter icon' style={{color: 'white', cursor: 'pointer'}}></i></a>
                    <a href="/" className='nav-link' style={{backgroundColor: 'rgba(10, 9, 9, 0.75)', cursor: 'pointer'}}><i className='fab fa-instagram icon' style={{color: 'white', cursor: 'pointer'}}></i></a>
                    <a href="/" className='nav-link' style={{backgroundColor: 'rgba(10, 9, 9, 0.75)', cursor: 'pointer'}}><i className='fab fa-youtube icon' style={{color: 'white', cursor: 'pointer'}}></i></a>
                </div>
            </div>
        </div>
        <div className="d-flex container pt-5 mt-5" style={{gap: '3rem',}}>
            <img src="https://scintillating-smakager-860376.netlify.app/images/team/t1.webp" alt="" style={{height: '25rem', width: '30rem'}}/>
            <div>
                <h1>Mr. Sujal Chandrakar</h1>
                <p style={{lineHeight: '30px'}} className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt alias suscipit magni explicabo sint illum, sed atque id ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam minima, velit rem, enim, blanditiis aperiam sit fugit voluptatem esse ad iure corporis sapiente! Dolores sequi reiciendis culpa possimus repellendus porro ut dignissimos ea explicabo, aliquam illo in dicta autem reprehenderit laboriosam hic eius. Est blanditiis fuga natus vel corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi explicabo minus eaque veniam ratione, aspernatur fugiat aliquid saepe sapiente expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis distinctio dolorum consequatur inventore, natus velit necessitatibus sapiente facere ipsa officiis?</p>
                <span style={{fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '0.1rem', color: 'rgb(97, 124, 108)'}}>Position : Front-End Developer</span>
                <div className="social-link" style={{ position: 'relative', top: '1.5rem'}}>
                    <a href="/" className='nav-link' style={{backgroundColor: 'rgba(10, 9, 9, 0.75)', cursor: 'pointer'}}><i className='fab fa-facebook-f icon' style={{color: 'white', cursor: 'pointer'}}></i></a>
                    <a href="/" className='nav-link' style={{backgroundColor: 'rgba(10, 9, 9, 0.75)', cursor: 'pointer'}}><i className='fab fa-twitter icon' style={{color: 'white', cursor: 'pointer'}}></i></a>
                    <a href="/" className='nav-link' style={{backgroundColor: 'rgba(10, 9, 9, 0.75)', cursor: 'pointer'}}><i className='fab fa-instagram icon' style={{color: 'white', cursor: 'pointer'}}></i></a>
                    <a href="/" className='nav-link' style={{backgroundColor: 'rgba(10, 9, 9, 0.75)', cursor: 'pointer'}}><i className='fab fa-youtube icon' style={{color: 'white', cursor: 'pointer'}}></i></a>
                </div>
            </div>
        </div>
        <Newsletter/>
        <Footer/>
    </div>
  )
}
