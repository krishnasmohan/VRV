import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <div className='logo-container'>
                <img src="https://storage.googleapis.com/mixo-files/logos/1732433321552-vrvSecurity-zkz8.svg" alt="logo" className='logo'/>
                <a class="navbar-brand logo-title" href="#">VRV</a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse nav-items" id="navbarNavAltMarkup">
              <div class="navbar-nav nav-pages">
                <li class="nav-item">
                  <NavLink className="nav-link" to={"/"}>Home</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to={"/About"}>About us</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to={"/Contact"}>Contact</NavLink>
                </li>
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Header