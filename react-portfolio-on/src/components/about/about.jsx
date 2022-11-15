import React from 'react'
import './about.css'

import coffee from '../../assets/coffee.JPG'


const About = () => {

    return (

        <section id='about'>
            <h2>About Me</h2>

            <div className='aboutContainer'>

                <div className='aboutImages'>

                    
                    <div className='imageContainer'>
                        <img src={coffee} alt="Owen Newlove with coffee" />
                    </div>




                </div>

                <div className='aboutContent'>

                </div>


            </div>

        </section>

    )


}



export default About