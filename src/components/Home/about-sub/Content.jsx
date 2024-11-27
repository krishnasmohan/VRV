import React from 'react'
import "./about.css"

const Content = ({details}) => {
    console.log(details);
    
  return (
    <div>
        {
            details.id % 2 === 0 ? (
                <div className='details-container p-lg-5'>
                    <div className='image-wrapper p-5'>
                        <img className='detail-img' src={details.img} alt="loading..." />
                    </div>
                    <div className='detail-wrapper p-3'>
                        <h1>{details.title}</h1>
                        <p>{details.description}</p>
                    </div>
                </div>
            ):(
                <div className='details-container p-lg-5'>
                    <div className='detail-wrapper'>
                        <h1>{details.title}</h1>
                        <p>{details.description}</p>
                    </div>
                    <div className='image-wrapper p-5'>
                        <img className='detail-img' src={details.img} alt="loading..." />
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Content