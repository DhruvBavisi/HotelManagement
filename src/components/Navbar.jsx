import React from 'react'
import '../styles/Navbar.css'
import { Outlet } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
      <nav>
        <div className="nav-logo">
          LOGO
        </div>
        <div className="nav-mid">
          <HashLink to="#home" className='nav-link active' aria-current='page' smooth>Home</HashLink>
          <HashLink to="#about" className='nav-link active' smooth>About Us</HashLink>
          <HashLink to="#rooms" className='nav-link active' smooth>Rooms</HashLink>
          {/* <HashLink to="/">Sevices</HashLink> */}
          <HashLink to="#contact" smooth>Contact</HashLink>
        </div>
        <div className="nav-right">
          <NavLink href="">Book Now</NavLink>
        </div>
        {/* <i onclick="sidebar()" className="ri-menu-line menubar"></i>
          <div className="nav-sidebar">
          <i onclick="sidebar()" className="ri-menu-line"></i>
          <a href="/home.html">Home</a>
          <a href="/About.html">About Us</a>
          <a href="/Rooms.html">Rooms</a>
          <a href="/Services.html">Sevices</a>
          <a href="/contact.html">Contact</a>
        </div> */}
      </nav>
  )
}
