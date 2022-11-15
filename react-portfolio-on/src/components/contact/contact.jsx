import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {GrLinkedin} from 'react-icons/gr'
const Contact = () => {

    return (

        <section id='contact'>
            <h2>Contact Me</h2>

            <div className='contactCards'>

                <a href="mailto:owen.newlove@gmail.com" className='contactCard'>
                    <div >
                        <h4><AiOutlineMail /></h4>
                        <h4>Email</h4>


                    </div>
                </a>

                <a href="https://www.linkedin.com/in/owen-newlove-96b241257/" className='contactCard'>
                    <div >
                        <h4><GrLinkedin/></h4>
                        <h4>LinkedIn</h4>

                    </div>
                </a>

                <a href="https://github.com/Owennewlove" className='contactCard'>
                    <div >
                        <h4><BsGithub/></h4>
                        <h4>Github</h4>
                    </div>
                </a>

            </div>

        </section>

    )


}



export default Contact