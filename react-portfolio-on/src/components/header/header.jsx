import React from 'react'
import './header.css'
import professional from '../../assets/professional.JPG'

const Header = () => {




  return (
    <section className='header' id='header'>
      <h4>Hello I'm</h4>

      <h1>Owen Newlove</h1>

      <div className='headerBottom'>

      <div className='images'>
        <div className='imageContainer'>
          <img src={professional} alt="Full Stack Developer Owen Newlove" />
        </div>

      </div>



      <div className='headerContent'>
        <h5>Fullstack Developer</h5>
        <a href='resume' download="Owen's Resume"><button className='headerButton' id='resume'>Download CV</button></a>
        <a href="mailto:owen.newlove@gmail.com"><button className='headerButton'>Message Me</button></a>

      </div>

      </div>

      


    </section>
  )
}

export default Header