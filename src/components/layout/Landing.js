import React from 'react'

const Landing = () => {
  return (
    <div>
        <section className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                    <h1 className='x-large'>
                        Developer Connector
                    </h1>
                    <p className='lead'>
                        Create a developer profile/protfolio, share posts and get help from other developers
                    </p>
                </div>
                <div className='buttons'>
                    <a href='register.html' className='btn btn-primary'>Sign up</a>
                    <a href='login.html' className='btn btn-light'>Login</a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Landing