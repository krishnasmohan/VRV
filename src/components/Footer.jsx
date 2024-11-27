import React from 'react'
import "../index.css"
import { FaFacebook,FaInstagram,FaYoutube,FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
        <div className='p-5 '>
            <div className='footer-navs p-5'>
              <span>Solutions</span><span>About Us</span><span>Contact</span>
            </div>
            <div className='footer-navs pb-5'>
              <FaFacebook size={30}/>
              <FaInstagram size={30}/>
              <FaLinkedin size={30}/>
              <FaYoutube size={30}/>
            </div>
        </div>
    </footer>
  )
}

export default Footer