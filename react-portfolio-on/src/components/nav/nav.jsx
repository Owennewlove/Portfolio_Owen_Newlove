import React from 'react'
import './nav.css'
import {SiAboutdotme} from 'react-icons/si'
import {AiOutlineMessage} from 'react-icons/ai'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {HiOutlineHome} from 'react-icons/hi'
import {useState} from 'react'


const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')

    return (
        <nav>
            <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><HiOutlineHome/></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><SiAboutdotme/></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdOutlineWorkOutline/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>

        </nav>
    )
  
  
}



export default Nav