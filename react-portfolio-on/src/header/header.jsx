import React from 'react'
import './header.css'



const Header = () => {
  return (
    <div className='header'> 
    <h4>Hello I'm</h4>

    <h1>Owen Newlove</h1>

    <p>Fullstack Developer</p>
    <button className='headerButton'>Download CV</button>
    <button className='headerButton'>Message Me</button>
        
    </div>
  )
}

export default Header