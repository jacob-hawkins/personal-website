import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import github from './Photos/github.png'
import linkedin from './Photos/linkedin.png'
import email from './Photos/email.png'
import './Contact.css'

function Contact() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (

        <div id="mobile-contact" >

            <div data-aos="fade-in">
                <h1 id="mobile-contact-title">Contact</h1>



                <div id="mobile-contact-grid">
                    <a href="https://github.com/jacob-hawkins" target="blank" className="mobile-contact-link"><img src={github} alt="github" className="mobile-contact-img"></img></a>
                    <a href="https://www.linkedin.com/in/jacob-hawkins-94306721a/" target="blank" className="mobile-contact-link"><img src={linkedin} alt="linkedin" className="mobile-contact-img"></img></a>
                    <a href="mailto: jhawki41@vols.utk.edu" className="mobile-contact-link"><img src={email} alt="email" style={{ width: 'auto', height: '50px' }}></img></a>
                </div>

            </div>
        </div >
    )
}

export default Contact
