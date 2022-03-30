import React from 'react'
import github from './Photos/github.png'
import linkedin from './Photos/linkedin.png'
import email from './Photos/email.png'
import './Contact.css'

function Contact() {
    return (

        <div id="contact">
            <h1 id="contact-title">Contact</h1>



            <div id="contact-grid">
                <a href="https://github.com/jacob-hawkins" target="blank" alt="github" className="contact-link"><img src={github} className="contact-img"></img></a>
                <a href="https://www.linkedin.com/in/jacob-hawkins-94306721a/" target="blank" alt="linkedin" className="contact-link"><img src={linkedin} className="contact-img"></img></a>
                <a href="mailto: jhawki41@vols.utk.edu" alt="email" className="contact-link"><img src={email} style={{ width: 'auto', height: '75px' }}></img></a>
            </div>




        </div >
    )
}

export default Contact
