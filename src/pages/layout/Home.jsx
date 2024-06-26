import React from 'react'
import '../../styles/Home.css'
import About from './About'
import Rooms from './Rooms'
import { HashLink } from 'react-router-hash-link'

export default function Home() {
    return (
        <>
            <div className="main-heading">
                <p className="sub-head">BEST HOTEL WITH COZY ROOMS</p>
                <h1 className="main-head">Just Experience A New Level Of Luxury.</h1>
                <p className="para-head">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum eget vel
                    quam adipiscing turpis. Consectetur phasellus nam interdum eu dictum nunc. A fermentum ipsum nulla
                    adipiscing ornare molestie.</p>
                <HashLink to="#rooms" smooth>Explore Rooms</HashLink>
            </div>
        </>
    )
}
