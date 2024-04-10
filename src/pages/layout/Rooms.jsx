import React from 'react'
import '../../styles/Rooms.css'

export default function Rooms() {
    return (
        <>
            <div className='explore-rooms'>
                <h1>Explore Our Rooms</h1>
                <div className="room-img">
                    <i className="fa-solid fa-chevron-left"></i>
                    <div className="img-container"><img src="/src/Images/Classic.png" alt="" /><span>Classic Rooms</span></div>
                    <div className="img-container"><img src="/src/Images/Deluxe.png" alt="" /><span>Executive Rooms</span></div>
                    <div className="img-container"><img src="/src/Images/Ultra_Deluxe.png" alt="" /><span>Deluxe Rooms</span></div>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div className="rooms-testimonials">
                <img src="/src/Images/palm-leaves.png" alt="" />
                <h1>“Sollicitudin pulvinar eu consectetur tortor. At consequat cursus convallis vestibulum proin eget. Sit iaculis nec sed nisl urna purus lectus eget accumsan lectus ultrices quam.”</h1>
                <p>- Jason Hook, USA</p>
            </div>
        </>
    )
}
