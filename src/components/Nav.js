import React from 'react'
import './Nav.css';
function Nav() {
  return (
   <nav className="navbar">
  <div className="logo">MediCare Hospital</div>

  <ul className="nav-links">
    <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#doctors">Doctors</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

  
</nav>
  )
}

export default Nav
