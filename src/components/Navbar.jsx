import React from 'react'
import '../styles/Navbar.css'
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      console.log('Scroll position:', currentPosition); // Log scroll position to console
    };

    window.addEventListener('scroll', handleScroll); // Attach scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Remove event listener on unmount
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      <nav className={isScrolled ? 'scrolled' : ''}>
        <div className="nav-logo">LOGO</div>
        <div className="nav-mid">
          <HashLink smooth to="#home" className={scrollPosition >= 0 && scrollPosition < window.innerHeight ? 'active' : ''}>Home</HashLink>
          <HashLink smooth to="#about" className={scrollPosition >= window.innerHeight && scrollPosition < (2.3 * window.innerHeight) ? 'active' : ''}>About Us</HashLink>
          <HashLink smooth to="#rooms" className={scrollPosition >= (2.3 * window.innerHeight) && scrollPosition < (4.3 * window.innerHeight) ? 'active' : ''}>Rooms</HashLink>
          <HashLink smooth to="#contact" className={scrollPosition >= (4.3 * window.innerHeight) ? 'active' : ''}>Contact</HashLink>
        </div>
        <div className="nav-right">
          <HashLink smooth to="#rooms">Book Now</HashLink>
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
    </>
  )
}
