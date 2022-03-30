import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './Nav.css';

function Nav() {
    return (
        <div className="nav-div">
            <ul className="nav-list">
                <li className="nav-item first"><Link to="/about">Jacob Hawkins</Link></li>
                <li className="nav-item"><Link to="/about/#resume-title">resume</Link></li>
                <li className="nav-item"><Link to="/about/#contact">contact</Link></li>
            </ul>
        </div>
    )
}

export default Nav
