import React from 'react'
import './experience.css'

import happyCamper from '../../assets/happy-camper.png'
import employeeTracker from '../../assets/employeeTracker.png'


const Experience = () => {

    return (
        <section id='experience'>
            <h2>Experience</h2>
            <p></p>

            <section className='expImages'>
                <div className='imgCard'>
                <a href="https://project-3-osu-akf.herokuapp.com/"><img src= {happyCamper} alt="Happy Camper Map" className='experienceImage' /></a>

                </div>
                <div className='imgCard'>
                    <a href="https://github.com/Owennewlove/git_sql_js_Employee_Tracker_ON"><img src={employeeTracker} alt="Code for an employee tracker in VS Code" className='experienceImage' /></a>

                </div>
                <div className='imgCard'>

                    <p>Hello world</p>

                </div>
            

            </section>

            
            {/* <a href=""><img src="" alt="" /></a>
            <a href=""><img src="" alt="" /></a>
            <a href=""><img src="" alt="" /></a>
            <a href=""><img src="" alt="" /></a>
            <a href=""><img src="" alt="" /></a> */}
            

        </section>
        
    )
  
  
}



export default Experience