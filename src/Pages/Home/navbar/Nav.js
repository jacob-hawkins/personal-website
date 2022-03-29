import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css';

function Nav() {
    return (
        <div>
            <ul className="nav-list">
                <li className="nav-item first"><Link to="/about">Jacob Hawkins</Link></li>
                <li className="nav-item"><Link to="/about/#resume">resume</Link></li>
                <li className="nav-item"><Link to="/about/#contact">contact</Link></li>
            </ul>
        </div>
    )
}

export default Nav
