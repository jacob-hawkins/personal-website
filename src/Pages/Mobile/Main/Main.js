import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Main.css'

function Main() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div>
            <h1 id="mobile-nav">Jacob Hawkins</h1>

            {/* HELLO AND LINES */}
            <div id="mobile-title">
                <h1>hello</h1>
            </div>

            <div className="mobile-lines">
                <hr className="mobile-main-hr" id="mobile-first" />
                <hr className="mobile-main-hr" id="mobile-second" />
                <hr className="mobile-main-hr" id="mobile-third" />
                <hr className="mobile-main-hr" id="mobile-fourth" />
                <hr className="mobile-main-hr" id="mobile-fifth" />
            </div>

            {/* NAME */}
            <section id="mobile-upper" data-aos="fade-in">
                <h1 id="mobile-title1">My name is Jacob Hawkins.</h1>

                <h4>I am a computer science student at the <span>University of Tennessee</span>.</h4>

            </section>

            {/* SKILLS */}
            <section id="mobile-skills" data-aos="fade-in">
                <h1 data-aos="fade-in">Skills</h1>
                <div className="mobile-skills-flex">
                    <div data-aos="fade-right">
                        <h3>HTML5 & CSS3</h3>
                        <hr />
                        <p>I have the most experience using HTML and CSS after taking many classes in high school and working on personal projects. I recieved the CIW Advanced HTML5 and CSS3 Specialist certification in April 2020.</p>
                    </div>

                    <div data-aos="fade-left">
                        <h3>Javascript & React</h3>
                        <hr />
                        <p>I am learning JavaScript as well as the quirks of the React Framework. This site was fully built using the React Framework.</p>
                    </div>

                    <div data-aos="fade-right">
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
