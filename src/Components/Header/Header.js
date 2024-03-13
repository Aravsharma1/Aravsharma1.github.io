import React from 'react'
import './Header.css'
import Typical from 'react-typical'
import profileImage from '../../Assets/newmainphoto.jpg'

const Header = () => {
  return (
    
   <div className='header-container'>
    {/* Content for the Header of the portfolio website */}
    <div className='header-content'>
        <h1 id='header-connect'> Hello! I'm</h1>
        <h2 className='fullname'>Arav Sharma</h2>
        <h2>
            I'm interested in {""}
            <Typical steps = {["Full Stack Development 🚀", 
                               1000,
                            "Machine Learning 📈", 
                            1000,
                            "Artificial Intelligence 🤖",
                        1000,
                            "Data Analytics 👨‍💻",
                            1000,
                            "Data Engineering 👷",
                            1000,
                            "Web-Development 🖥️",
                            1000, 
                            "Mobile-App Development 📱",
                            1000,   ]} 
            loop = {Infinity}
            wrapper="b" />
             
            
            


        </h2>
        <p>
        I am currently a freshman studying Computer Science at the University of Waterloo in Ontario, Canada. I am 
        looking for co-op/internship opportunities for Fall 2024. Aside from that, I am very passionate about 
        various disciplines within the field of Computer Science, and I aim to become more proficient in them through 
        a hands-on-approach through internship opportunities. 
        </p>
        {/* payment links */}
        <div className='header-payment-container'>
            
        
        
        <button className='button'>Download Resume</button>
        {/* webresume.pdf
            <button><a href ='../../Assets/webresume.pdf' download className='button'> Download CV</a></button>
            <a href='../../../Assets/webresume.pdf' download className='button'>Download CV</a>
        */}
        
        {/* 
        <li>
          <a href="https://www.linkedin.com/in/arav-sharma">
            <i className='fa-brands fa-linkedin'></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Aravsharma1">
            <i className='fa-brands fa-github'></i> 
          </a>
        </li>
        */}
        
            </div>
        </div>
        {/* Image Container */}
        <div className='profileimg-container'>
            <img src={profileImage} alt=""/>
            <div className='circle-1'></div>
            <div className='circle-2'></div>
        </div>
    </div>
   
  )
}

export default Header