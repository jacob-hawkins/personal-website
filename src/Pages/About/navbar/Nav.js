import React from 'react'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import './Nav2.css';

function Nav() {
    return (
        <div id="fixed">
            <div id="navbar">
                <ul className="nav-list2">
                    <li className="nav-item2 first"><Link to="/">Jacob Hawkins</Link></li>
                    <li className="nav-item2"><Link to="#resume-title">resume</Link></li>
                    <li className="nav-item2"><Link to="#contact">contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
