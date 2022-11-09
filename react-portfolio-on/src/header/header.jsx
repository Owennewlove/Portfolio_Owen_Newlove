import React from 'react'
import './header.css'


const Header = () => {




  return (
    <div className='header' id='header'> 
    <h4>Hello I'm</h4>

    <h1>Owen Newlove</h1>

    <p>Fullstack Developer</p>
    <a href='../assets/' download><button className='headerButton' id='resume'>Download CV</button></a>
    <a href="mailto:owen.newlove@gmail.com"><button className='headerButton'>Message Me</button></a>
        
    </div>
  )
}

export default Header