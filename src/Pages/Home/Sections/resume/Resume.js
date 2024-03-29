import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Resume.css';


function Resume() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    
    return (
        <div id="resume" data-aos="fade-in">
            <h1 id="resume-title">Resume</h1>

            {/* -------------------------------------------------------------------------------------- */}
            {/* EDUCATION */}
            <div data-aos="fade-in">
                <h3 className="resume-headings">Education</h3>
                <hr className="resume-hr" />

                <div className="resume-grid">
                    <div className="resume-subheading-block">
                        <h4 className="resume-subheading">The University of Tennessee, Knoxville, <span style={{ color: 'grey', fontStyle: 'italic' }} >Tickle College of Engineering</span></h4>
                        <h4 className="resume-subtitles"><span className="italics">Bachelor of Science</span></h4>
                        <h4 className="resume-subtitles">Major: <span className="italics">Computer Science</span></h4>
                        <h4 className="resume-subtitles">Involvement: <span className="italics">UTK Roundnet Club, UTK WebDev</span></h4>
                    </div>
                    <div className="resume-dates">
                        <h5>Knoxville, Tennessee</h5>
                        <h5>Graduation: May 2024</h5>
                    </div>


                    <div className="resume-subheading-block">
                        <h4 className="resume-subheading">Bearden High School</h4>
                        <h4 className="resume-subtitles"><span className="italics">High School Diploma</span></h4>
                        <h4 className="resume-subtitles">Cumulative GPA:  <span className="italics">4.30 / 4.0</span></h4>
                        <h4 className="resume-subtitles">ACT: 32</h4>
                    </div>
                    <div className="resume-dates">
                        <h5>Knoxville, Tennessee</h5>
                        <h5>Graduation: May 2020</h5>
                    </div>
                </div>
            </div>

            <div style={{ display: 'block', height: '100px', width: '100%' }}></div>

            {/* -------------------------------------------------------------------------------------- */}
            {/* JOB EXPERIENCE */}
            <div data-aos="fade-in">
                <h3 className="resume-headings">Job Experience</h3>
                <hr className="resume-hr" />

                <div className="resume-grid">
                    <div className="resume-subheading-block">
                        <h4 className="resume-subheading">VolShop</h4>
                        <h4 className="resume-subtitles"><span className="italics">Order Fulfillment Associate</span></h4>
                    </div>
                    <div className="resume-dates">
                        <h5>Knoxville, Tennessee</h5>
                        <h5>February 2022 - Current</h5>
                    </div>
                </div>
                <div className="resume-job-description">
                    <ul>
                        <li>Trained in order picking, packing, fulfilling and shipping using the NetSuite Inventory system, FedEx Shipping, and Endicia Shipping software.</li>
                        <li>Responsible for an efficient customer order to shipment turnaround.</li>
                        <li>Provide customer assistance in online order problems.</li>
                    </ul>
                </div>

                <div className="resume-grid">
                    <div className="resume-subheading-block">
                        <h4 className="resume-subheading">Knox County Schools, Farragut Middle School</h4>
                        <h4 className="resume-subtitles"><span className="italics">Summer Bridge Program Tutor</span></h4>
                    </div>
                    <div className="resume-dates">
                        <h5>Knoxville, Tennessee</h5>
                        <h5>June 2022</h5>
                    </div>
                </div>
                <div className="resume-job-description">
                    <ul>
                        <li> A one-month summer school program in which I tutored small groups of students, reinforcing math concepts at a rising <br /> 6th, 7th, and 8th-grade level.</li>
                    </ul>
                </div>

                <div className="resume-grid">
                    <div className="resume-subheading-block">
                        <h4 className="resume-subheading">TJ Maxx</h4>
                        <h4 className="resume-subtitles"><span className="italics">Retail Associate</span></h4>
                    </div>
                    <div className="resume-dates">
                        <h5>Knoxville, Tennessee</h5>
                        <h5>December 2019 – February 2021</h5>
                    </div>
                </div>
                <div className="resume-job-description">
                    <ul>
                        <li>Responsible for the organization and cleanliness of the Men's, Kid's and Home departments.</li>
                        <li>Processed and staged furniture and luggage.</li>
                        <li>Provided a fast and efficient checkout experience as a cashier.</li>
                        <li>Maintained a consistent customer experience through the COVID-19 pandemic.</li>
                    </ul>
                </div>

                <h4 style={{ fontSize: '20px', paddingLeft: '50px', marginTop: '50px' }}>Relevant Skills: C++, HTML5, CSS3, JavaScript, React, MIPS Assembly</h4>
            </div>

            <div style={{ display: 'block', height: '100px', width: '100%' }}></div>


            {/* -------------------------------------------------------------------------------------- */}
            {/* VOLUNTEER EXPERIENCE */}
            <div data-aos="fade-in">
                <h3 className="resume-headings">Volunteer Experience</h3>
                <hr className="resume-hr" />

                <div className="resume-grid">
                    <div className="resume-subheading-block">
                        <h4 className="resume-subheading">Carolina Mountain Mission</h4>
                    </div>
                    <div className="resume-dates">
                        <h5>Haywood County, North Carolina</h5>
                        <h5>Summers of 2015 - 2019</h5>
                    </div>
                </div>
                <div className="resume-job-description">
                    <ul>
                        <li>Worked with local community members in need building decks and ramps, painting houses, and landscaping.</li>
                        <li>Participated in a large-scale food pantry serving customers being responsible for walking customers through the service line and stationed at specific food stations to pass out food to the customers.</li>
                    </ul>
                </div>
            </div>

            <div style={{ display: 'block', height: '100px', width: '100%' }}></div>

                {/* -------------------------------------------------------------------------------------- */}
                {/* LICENSES & CERTIFICATIONS */}
            <div data-aos="fade-in">
                <h3 className="resume-headings">Licenses & Certifications</h3>
                <hr className="resume-hr" />

                <div className="resume-grid">
                    <div className="resume-subheading-block">
                        <h4 className="resume-subheading">CIW Advanced HTML5 and CSS3 Specialist - <span style={{ color: 'grey', fontStyle: 'italic' }} >Certification Partners (CIW)</span></h4>
                    </div>
                    <div className="resume-dates">
                        <h5>April 2020</h5>
                    </div>
                </div>
            </div>

            <div style={{ display: 'block', height: '100px', width: '100%' }}></div>

            {/* -------------------------------------------------------------------------------------- */}
            {/* HONORS & AWARDS */}
            <div data-aos="fade-in">
                <h3 className="resume-headings">Honors & Awards</h3>
                <hr className="resume-hr" />

                <h4 style={{ fontSize: '2vw', paddingLeft: '50px', marginTop: '30px' }}>Volunteer Scholarship - <span style={{ color: 'grey', fontStyle: 'italic' }} >University of Tennessee Knoxville</span></h4>
                <h4 style={{ fontSize: '2vw', paddingLeft: '50px', marginTop: '10px' }}>Grand Cooke Honors Program -<span style={{ color: 'grey', fontStyle: 'italic' }} >University of Tennessee Knoxville</span></h4>
            </div>

            <div style={{ display: 'block', height: '200px', width: '100%' }}></div>

        </div >
    )
}


export default Resume
