import React from 'react';
import styles from '../styles/components/Navbar.module.scss';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul>
                <li>Jacob Hawkins</li>
                <div className={styles.right_side}>
                    <li>
                        <a
                            href='https://www.linkedin.com/in/jacob--hawkins/'
                            target='_blank'
                            rel='noreferrer'>
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/jacob-hawkins' target='_blank' rel='noreferrer'>
                            GitHub
                        </a>
                    </li>
                </div>
            </ul>
            <hr />
        </div>
    );
}

export default Navbar;
