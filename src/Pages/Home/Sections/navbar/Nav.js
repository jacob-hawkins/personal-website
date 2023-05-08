import React from 'react'
import './Nav.css';

function Nav() {
    return (
        <div className="nav-div">
            <ul className="nav-list">
                <li className="nav-item first">Jacob Hawkins</li>
                <li className="nav-item"><a href="https://www.linkedin.com/in/jacob--hawkins/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li className="nav-item"><a href="https://github.com/jacob-hawkins" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
        </div>
    )
}

export default Nav
