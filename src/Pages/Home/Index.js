import React from 'react'
import Main from './main/Main'
import Nav from './navbar/Nav'
import About from './about/About'
import Resume from './resume/Resume'
import "./Index.css"
import Contact from './contact/Contact'

function Index() {
    return (
        <div id="home">
            <Nav />
            <Main />
            <About />
            <Resume />
            <Contact />
        </div>
    )
}

export default Index
