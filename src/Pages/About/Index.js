import React from 'react'
import About from './about/About'
import Nav from './navbar/Nav'
import Resume from './resume/Resume';
import Contact from './contact/Contact';
import './Index.css';

function Index() {
    return (
        <div>
            <Nav />
            <About />
            <Resume />
            <Contact />
        </div>
    )
}

export default Index
