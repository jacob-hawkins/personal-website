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
                <a href="https://github.com/jacob-hawkins" target="blank" className="contact-link"><img src={github} alt="github" className="contact-img"></img></a>
                <a href="https://www.linkedin.com/in/jacob-hawkins-94306721a/" target="blank" className="contact-link"><img src={linkedin} alt="linkedin" className="contact-img"></img></a>
                <a href="mailto: jhawki41@vols.utk.edu" className="contact-link"><img src={email} alt="email" style={{ width: 'auto', height: '75px' }}></img></a>
            </div>




        </div >
    )
}

export default Contact
