import React from 'react'
import "./main.css"

const Main = () => {
  return (
    <main>
        <div className='main-container p-lg-5 p-md-3'>
            <div className='title-container p-lg-5'>
                <h1 className='main-title'>Protect your Data with VRV Security</h1>
                <p className='d-flex w-75'>
                    Welcome to VRV Security, a global 
                    powerhouse in AI-driven cybersecurity 
                    solutions. Protect your data network with 
                    our cutting-edge technology and expertise.
                </p>
            </div>
            <div className='image-main-cont'>
              <div className='d-flex'>
                <img className='main-img d-flex' src="https://images.unsplash.com/photo-1590065707046-4fde65275b2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzczODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzI1MTI4MTh8&ixlib=rb-4.0.3&q=80&w=1080" alt="loading..." />
              </div>
            </div>
        </div>
    </main>
  )
}

export default Main