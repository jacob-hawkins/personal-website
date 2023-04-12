import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import titleImage from './IMG_9008.jpg'
import { ReactComponent as Logo } from './welcome.svg';
import './Main.css'

function Main() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div>
            <h1 id="mobile-nav">Jacob Hawkins</h1>

            {/* HELLO AND LINES */}
            {/* <div id="mobile-title">
                <h1>hello</h1>
            </div> */}

            <div id="mobile-title-center-flex">
                <div id="mobile-title-grid">
                    <div>
                        <img src={titleImage} alt="me" />
                        
                        <div id="mobile-title">
                            {/* <h1 id="title-h1">Welcome</h1> */}
                            <Logo id="mobile-welcome" />
                        </div>

                        <h1 id="mobile-title-grid-h1">My name is Jacob Hawkins.</h1>
                        <h3>
                            I am a computer science major at the University of Tennessee and am a part of the Grand Cooke Engineering Honors Program. I enjoy offroading my 2008 Jeep Wrangler, playing spikeball with friends, and hiking.
                        </h3>
                    </div>
                </div>
            </div>

            <div className="mobile-lines">
                <hr className="mobile-main-hr" id="mobile-first" />
                <hr className="mobile-main-hr" id="mobile-second" />
                <hr className="mobile-main-hr" id="mobile-third" />
                <hr className="mobile-main-hr" id="mobile-fourth" />
                <hr className="mobile-main-hr" id="mobile-fifth" />
            </div>

            {/* SKILLS */}
            <section id="mobile-skills" data-aos="fade-in">
                <h1 data-aos="fade-in">Skills</h1>
                <div className="mobile-skills-flex">
                    <div data-aos="fade-in">
                        <h3>HTML5 & CSS3</h3>
                        <hr />
                        <p>I have the most experience using HTML and CSS after taking many classes in high school and working on personal projects. I recieved the CIW Advanced HTML5 and CSS3 Specialist certification in April 2020.</p>
                    </div>

                    <div data-aos="fade-in">
                        <h3>Javascript & React</h3>
                        <hr />
                        <p>I am learning JavaScript as well as the quirks of the React Framework. This site was fully built using the React Framework.</p>
                    </div>

                    <div data-aos="fade-in">
                        <h3>C++</h3>
                        <hr />
                        <p>As a computer science major at UT, all the CS curriculum is taught in C++. I have expierence in low level memory and bit manipulation as well as the standard temperate library.</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Main
