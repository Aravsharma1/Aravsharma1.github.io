import React from 'react'
import "./Services.css";
const Services = () => {
  return (
    <div className='services-container'>
        <div className="services-list-container">
            {/* desc */}
            <div className='services-desc-container'>
                <h1 id='my-skills-connect'> About <span> Me</span></h1>
                <p>
                    My current skills + some stuff I am working on. 
                </p>
                
                </div>
                {/* item */}
                <div className='service-item-container'></div>
                <div className='services-item'>
                    <i className='fa-solid fa-code'></i>
                    <div className='item-desc'>
                        <h3> Languages</h3>
                        <p> Proficient in Python, Java, JavaScript, SQL, CSS, R, Racket.</p>
                        
                    </div>
                </div>
                <div className='services-item'>
                    <i className='fa-solid fa-desktop'></i>
                    <div className='item-desc'>
                        <h3> Frameworks</h3>
                        <p> I Have experience with building projects using Numpy, Tensorflow, Matplotlib, MERN stack. </p>
                    </div>
                </div>
                <div className='services-item'>
                    <i className='fa-solid fa-tablet-alt'></i>
                    <div className='item-desc'>
                        <h3> What I am learning</h3>
                        <p> Currently learning React.JS for developing front-end applications and Swift for 
                            developing IOS applications. 
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Services