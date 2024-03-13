import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className='nav-links'>
            <ul>
                <li>
                    <a href ="#header-connect">Home</a>
                </li>
                <li>
                    <a href ="#my-skills-connect">About me</a>
                </li>
                <li>
                    <a href ="#portfolio-section-connect">Portfolio</a>
                </li>
                <li>
                    <a href ="#social-media-contact-me-temp-connect">Contact me</a>
                </li>
                

            </ul>
        </div>
    </nav>
  )
}

export default Navbar