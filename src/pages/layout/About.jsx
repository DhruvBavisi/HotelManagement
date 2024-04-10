import React from 'react'
import '../../styles/About.css'

export default function About() {
  return (
    <>
      <div className='about-intro'>
        <h1>Welcome to Palm Oasis Inn</h1>
        <p>Amet, cras egestas in ultrices sapien iaculis. Posuere mauris neque metus id tristique pellentesque gravida. Cursus id in nam pellentesque est. Et erat quam sed nisl convallis faucibus mauris, consectetur tempus, a ut dictum sapien risus maecenas dictum nunc arcu nunc arcu, vulputate ut.</p>
        <img src="/src/Images/palm-leaves.png" alt="" />
      </div>
      <div className='about-activities'>
        <div className="about-left">
          <img src="/src/Images/pexels-daria-shevtsova-1030979 1.png" alt="" />
        </div>
        <div className="about-right">
          <h1>What activities we offer</h1>
          <p>Enim ut nunc, ultrices mauris felis viverra amet. Ante sed dictum nisi suscipit ac ut faucibus pretium. Ultrices interdum viverra pharetra, tellus. Sapien eu diam ipsum volutpat, amet fringilla.</p>
          <img src="/src/Images/activities_offer.png" alt="" />
        </div>
      </div>
      <div className="about-achievements">
        <h1>Our Achievements</h1>
        <p>We are the top leading hotel with 22 years of experiences.</p>
        <div className="about-achieve-info">
          <div className="achieve-info"><h1>25k</h1><p>HAPPY CLIENTS</p></div>
          <div className="achieve-info"><h1>160</h1><p>TOTSL ROOMS</p></div>
          <div className="achieve-info"><h1>28</h1><p>AWARDS WON</p></div>
          <div className="achieve-info"><h1>100</h1><p>TEAM MEMBERS</p></div>
        </div>
      </div>
    </>
  )
}
