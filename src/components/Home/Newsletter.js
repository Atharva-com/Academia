import React from 'react'

export default function Newsletter(props) {
    return (
        <div style={{marginTop: '5rem'}}>
            <div className="mt-5">
                <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                    <div className="col-lg-6 col-12" style={{ paddingLeft: '4rem', color: '#fff', lineHeight: '30px', letterSpacing: '0.1rem', fontWeight: 'bold' }}>
                        <h1 className="pt-2">Newsletter - Stay tune and get the Latest Updates</h1>
                    </div>
                    <div className="col-lg-6 col-12 text-center">
                        <div className="form-outline form-white mb-4">
                            <input type="email" id="form-mail" className="form-control" placeholder='Email address' />
                            <label className="form-label"></label>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn mb-4 px-3 py-2" style={{border: '2px solid white', color: 'white'}}>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
