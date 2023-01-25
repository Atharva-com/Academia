import React from 'react'

export default function About() {
  return (
    <>
    <div className='container mt-5'>
        <div className="row">
            <div className="col-lg-6 col-12 mt-5" style={{height: '125vh'}}>
                <img src="https://scintillating-smakager-860376.netlify.app/images/about.webp" 
                        style={{height: '100%',
                                objectFit: 'cover',
                                width: '100%'}} alt="" />
            </div>
            <div className="col-lg-6 col-12 mt-5">
                <div className="container mx-5">
                    <h4 style={{color: 'var(--primary-color)', fontWeight: '500', letterSpacing: '0.1rem'}}>LEARN ANYTHING</h4>
                    <h1 style={{fontWeight: '900', letterSpacing: '0.1rem'}} className="py-3">Benefits We Are Providing</h1>
                    <div className="card d-flex bg-light" style={{display: 'flex', flexDirection: 'row', border: 'none', cursor: 'pointer' , backgroundColor: 'rgb(229 239 233)'}}>
                        <img src="https://img.icons8.com/dotty/80/000000/storytelling.png" className='m-3 my-5' style={{height: '70px', width: '70px', cursor: 'pointer'}} alt="" />
                        <div className="content card-body my-4" style={{display: 'flex', flexDirection: 'column', cursor: 'pointer'}}>
                            <h4 className='card-title' style={{fontWeight: '900', letterSpacing: '0.1rem', cursor: 'pointer'}}>ONLINE VIDEOS</h4>
                            <p className='card-text' style={{lineHeight: '30px', color: '#999', cursor: 'pointer'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto soluta repellat error, ad ab fugiat. Iste voluptatum laborum accusantium recusandae placeat dolorum .</p>
                        </div>
                    </div>
                    <div className="card d-flex bg-light my-5" style={{display: 'flex', flexDirection: 'row', border: 'none', cursor: 'pointer' }}>
                        <img src="https://img.icons8.com/ios/80/000000/diploma.png" className='m-3 my-5' alt="" style={{height: '70px', width: '70px', cursor: 'pointer'}} />
                        <div className="content card-body my-4" style={{display: 'flex', flexDirection: 'column', cursor: 'pointer'}}>
                            <h4 className='card-title' style={{fontWeight: '900', letterSpacing: '0.1rem', cursor: 'pointer'}}>EARN A CERTIFICATE</h4>
                            <p className='card-text' style={{lineHeight: '30px', color: '#999', cursor: 'pointer'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto soluta repellat error, ad ab fugiat. Iste voluptatum laborum accusantium recusandae placeat dolorum .</p>
                        </div>
                    </div>
                    <div className="card d-flex bg-light" style={{display: 'flex', flexDirection: 'row', border: 'none', cursor: 'pointer' }}>
                        <img src="https://img.icons8.com/dotty/80/000000/storytelling.png" className='m-3 my-5' style={{height: '70px', width: '70px', cursor: 'pointer'}} alt="" />
                        <div className="content card-body my-4" style={{display: 'flex', flexDirection: 'column', cursor: 'pointer'}}>
                            <h4 className='card-title' style={{fontWeight: '900', letterSpacing: '0.1rem', cursor: 'pointer'}}>LEARN WITH EXPERT</h4>
                            <p className='card-text' style={{lineHeight: '30px', color: '#999', cursor: 'pointer'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto soluta repellat error, ad ab fugiat. Iste voluptatum laborum accusantium recusandae placeat dolorum .</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="bg-image"></div>
    </>
  )
}
