import React from 'react'

export default function HomeDetails() {
  return (
      <div className="container" style={{marginTop: '18rem'}}>
        <div className="row text-light" style={{gap: '1rem', width: '50%'}}>
          <h4 style={{fontWeight: '600'}}>WELCOME TO ACADEMIA</h4>
          <h1 style={{fontWeight: '900', letterSpacing: '0.1rem', fontSize: '3.5rem'}}>Best Education Expertise</h1>
          <p style={{fontWeight: '600', fontSize: '1.1rem', lineHeight: '30px', letterSpacing: '0.1rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptatibus ipsam molestiae enim maxime similique? </p>
          <div className="button">
            <a href="/" className="btn text-light" style={{background: 'var(--primary-color)', padding: '1rem 2rem 1rem 2rem', fontWeight: '600'}}>GET STARTED NOW &rarr;</a>
            <a href="/" className="btn bg-light mx-3" style={{color: 'var(--primary-color)', padding: '1rem 2rem 1rem 2rem', fontWeight: '600'}}>VIEW COURSE &rarr;</a>
          </div>
        </div>
      </div>
  )
}
