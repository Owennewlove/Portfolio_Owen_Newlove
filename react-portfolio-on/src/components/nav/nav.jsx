import React from 'react'
import './nav.css'


const Nav = () => {

    return (
        <nav>

            <a href='#about'><button className='navButton'>About</button></a>
            <a href="#experience"><button className='navButton'>Experience</button></a>
            <a href="#contact"><button className='navButton'>Contact</button></a>
            <a href="#footer"><button className='navButton'>Footer</button></a>

        </nav>
    )
  
  
}



export default Nav