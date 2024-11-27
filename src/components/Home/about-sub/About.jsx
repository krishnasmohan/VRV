import React from 'react'
import "./about.css"
import Content from './Content'
import { Details } from '../../info/Deatails'

const About = () => {
  return (
    <div className='about-container'>
        <h1>AI-driven Cybersecurity Solutions</h1>
        <p>Protect your data and network with our cutting-edge technology snd expertise.</p>
        {
          Details.map((detail) => (
            <Content details={detail}/>
          ))
        }
    </div>
  )
}

export default About