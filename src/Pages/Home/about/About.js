import React, { useEffect } from 'react';
import Aos from 'aos';
import './About.css';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <>
            <section id="skills" data-aos="fade-in">
                <h1 data-aos="fade-in">Skills</h1>
                <div className="skills-flex">
                    <div data-aos="fade-right">
                        <h3>HTML5 & CSS3</h3>
                        <hr />
                        <p>I have the most experience using HTML and CSS after taking many classes in high school and working on personal projects. I recieved the CIW Advanced HTML5 and CSS3 Specialist certification in April 2020.</p>
                    </div>

                    <div data-aos="fade-up">
                        <h3>Javascript & React</h3>
                        <hr />
                        <p>I am learning JavaScript as well as the quirks of the React Framework. This site was fully built using the React Framework.</p>
                    </div>

                    <div data-aos="fade-left">
                        <h3>C++</h3>
                        <hr />
                        <p>As a computer science major at UT, most of the CS curriculum is taught in C++. I have expierence in low level memory and bit manipulation as well as the standard temperate library.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
