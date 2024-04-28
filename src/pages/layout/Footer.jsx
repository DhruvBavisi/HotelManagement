import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import '../../styles/Footer.css'

export default function Footer() {
    return (
        <>
            <div className="foot-links">
                <div className="foot-container">
                    <h2>About Us</h2>
                    <p>Ultrices interdum viverra pharetra, tellus. Sapien eu diam ipsum volutpat, amet fringi verra pharetrailla.</p>
                </div>
                <div className="foot-container">
                    <h2>Quick Links</h2>
                    <HashLink to="#home" smooth>Bookings</HashLink>
                    <HashLink to="#rooms" smooth>Rooms</HashLink>
                    <HashLink to="#contact" smooth>Contact</HashLink>
                </div>
                <div className="foot-container">
                    <h2>Contact</h2>
                    <p>Tea Berry, Marinette, India</p>
                    <p>+91 93977 74546</p>
                    <p>palmoasis@gmail.com</p>
                </div>
                <div className="foot-container">
                    <h2>Get Social</h2>
                    <p>Follow us on social platforms and keep in touch with Templates Jungle.</p>
                    <div className="social-links">
                        <Link><img src="/src/Images/fb.png" /></Link>
                        <Link><img src="/src/Images/insta.png" /></Link>
                        <Link><img src="/src/Images/linked.png" /></Link>
                        <Link><img src="/src/Images/yt.png" /></Link>
                    </div>
                </div>
            </div>
            <div className="copy-rights">
                <p>© 2024 Copyright Palm Oasis. All rights reserved</p>
                <p>Payment Methods: <img src="/src/Images/payment.png" alt="" /></p>
            </div>
        </>
    )
}
