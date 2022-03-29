import React from 'react'
import { Link } from 'react-router-dom'
import './Nav2.css';

function Nav() {
    return (
        <div id="fixed">
            <div id="navbar">
                <ul className="nav-list">
                    <li className="nav-item2 first"><Link to="/">Jacob Hawkins</Link></li>
                    <li className="nav-item2"><Link to="/about/#resume">resume</Link></li>
                    <li className="nav-item2"><Link to="/about/#contact">contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
