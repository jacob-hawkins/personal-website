import React from 'react'
import Main from './main/Main'
import Nav from './navbar/Nav'
import About from './about/About'
import "./Index.css"

function Index() {
    return (
        <div id="home">
            <Nav />
            <Main />
            <About />
        </div>
    )
}

export default Index
