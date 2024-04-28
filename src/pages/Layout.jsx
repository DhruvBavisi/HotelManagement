import React from 'react'
import Home from './layout/Home'
import About from './layout/About'
import Rooms from './layout/Rooms'
import Contact from './layout/Contact'

export default function layout() {
    return (
        <>
            {/* <Navbar /> */}
            <div className="home" id='home'>
                <Home />
            </div>
            <div className="about" id='about'>
                <About />
            </div>
            <div className='rooms' id="rooms">
                <Rooms />
            </div>
            <div className="contact" id="contact">
                <Contact />
            </div>
        </>
    )
}
