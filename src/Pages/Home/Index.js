import React from 'react'
import Main from './Sections/main/Main'
import Nav from './Sections/navbar/Nav'
import About from './Sections/about/About'
import Resume from './Sections/resume/Resume'
import "./Index.css"
import Contact from './Sections/contact/Contact'
import Projects from './Sections/projects/Projects'

function Index() {
    return (
        <div id="home">
            <Nav />
            <Main />
            {/* <About /> */}
            {/* <Resume /> */}
            {/* <Contact /> */}
            <Projects />
        </div>
    )
}

export default Index
